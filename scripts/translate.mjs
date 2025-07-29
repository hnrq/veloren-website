import fs from "fs/promises";
import Parser from "rss-parser";
import TurndownService from "turndown";
import { TranslationServiceClient } from "@google-cloud/translate";

const RSS_FEED_URL = process.env.VELOREN_RSS_URL;
const LAST_TRANSLATED_FILE = ".last-translated";
const OUTPUT_DIR = "src/content/blog";
const GOOGLE_CLOUD_PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID;
const turndownService = new TurndownService();

const translationClient = new TranslationServiceClient();

const saveTranslatedPost = async (filename, frontmatter, language, content) => {
  await fs.mkdir(`${OUTPUT_DIR}/${language}`, { recursive: true });
  const filePath = `${OUTPUT_DIR}/${language}/${filename}.md`;
  await fs.writeFile(filePath, frontmatter + content, "utf8");
  console.log(`Saved ${language} post to: ${filePath}`);
};

/**
 * Reads the last translated GUID from a file.
 * @returns {Promise<string|null>} The last translated GUID or null if file doesn't exist.
 */
async function readLastTranslatedGuid() {
  try {
    const guid = await fs.readFile(LAST_TRANSLATED_FILE, "utf8");
    return guid.trim();
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`"${LAST_TRANSLATED_FILE}" not found. Starting fresh.`);
      return null;
    }
    console.error("Error reading last translated GUID:", error);
    throw error;
  }
}

/**
 * Writes the new last translated GUID to a file.
 * @param {string} guid - The GUID to save.
 */
async function writeLastTranslatedGuid(guid) {
  try {
    await fs.writeFile(LAST_TRANSLATED_FILE, guid, "utf8");
    console.log(`Updated "${LAST_TRANSLATED_FILE}" with GUID: ${guid}`);
  } catch (error) {
    console.error("Error writing last translated GUID:", error);
    throw error;
  }
}

/**
 * Makes a Google Cloud Translation API request to translate text.
 * @param {string} text - The text to translate.
 * @param {string} targetLanguageCode - The target language code (e.g., 'pt', 'es').
 * @returns {Promise<string>} The translated text.
 */
async function translateText(text, targetLanguageCode) {
  if (!GOOGLE_CLOUD_PROJECT_ID) {
    console.warn(
      "GOOGLE_CLOUD_PROJECT_ID is not set. Skipping actual translation.",
    );
    return `[SIMULATED TRANSLATION to ${targetLanguageCode}]: ${text}`;
  }

  const request = {
    parent: `projects/${GOOGLE_CLOUD_PROJECT_ID}/locations/global`,
    contents: [text],
    mimeType: "text/plain",
    sourceLanguageCode: "en",
    targetLanguageCode: targetLanguageCode,
  };

  try {
    const [response] = await translationClient.translateText(request);
    const translatedText = response.translations[0].translatedText;
    return translatedText;
  } catch (error) {
    console.error(
      `Error translating to ${targetLanguageCode} using Google Cloud Translation:`,
      error,
    );
    return `[TRANSLATION ERROR for ${targetLanguageCode}]: ${text}`;
  }
}

/**
 * Main function to fetch, translate, and save blog posts.
 */
async function main() {
  const parser = new Parser();

  try {
    console.log("Fetching RSS feed...");
    const feed = await parser.parseURL(RSS_FEED_URL);
    console.log(`Fetched ${feed.items.length} items from RSS feed.`);

    if (!feed.items || feed.items.length === 0) {
      console.log("No items found in the RSS feed. Exiting.");
      return;
    }

    const latestGuid = feed.items[0].guid;
    const lastTranslatedGuid = await readLastTranslatedGuid();

    if (latestGuid === lastTranslatedGuid) {
      console.log(
        "No new posts to translate. The latest post has already been translated.",
      );
      return;
    }

    let itemsToTranslate = feed.items;

    if (lastTranslatedGuid) {
      const lastTranslatedIndex = feed.items.findIndex(
        (item) => item.guid === lastTranslatedGuid,
      );
      if (lastTranslatedIndex !== -1) {
        itemsToTranslate = feed.items.slice(0, lastTranslatedIndex);
        console.log(
          `Found ${itemsToTranslate.length} new posts since last translation.`,
        );
      } else {
        console.warn(
          "Last translated GUID not found in current feed. Translating all available posts.",
        );
      }
    } else {
      console.log(
        "No previous translation record found. Translating all posts in the feed.",
      );
    }

    if (itemsToTranslate.length === 0) {
      console.log("No new items to translate after slicing. Exiting.");
      return;
    }

    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    for (const item of itemsToTranslate.reverse()) {
      const filename = item.guid.split("/").at(-2);
      if (!filename) {
        console.warn(
          `Could not determine filename from GUID: ${item.guid}. Skipping item.`,
        );
        continue;
      }

      console.log(`Processing post: "${item.title}" (GUID: ${item.guid})`);

      const markdownContent = turndownService.turndown(item.content);

      console.log("Translating to pt-BR and ES...");

      const frontmatter = `---
title: "${item.title.replace(/"/g, '\\"')}"
guid: "${item.guid}"
url: "${item.link}"
pubDate: "${item.isoDate}"
---

`;
      console.log("Translating to pt-BR and ES...");
      const [translatedPtBr, translatedEs] = await Promise.all([
        translateText(markdownContent, "pt-BR"),
        translateText(markdownContent, "es"),
      ]);

      await Promise.all([
        saveTranslatedPost(filename, frontmatter, "pt-br", translatedPtBr),
        saveTranslatedPost(filename, frontmatter, "es", translatedEs),
      ]);
    }

    await writeLastTranslatedGuid(latestGuid);
    console.log("Translation process completed successfully!");
  } catch (error) {
    console.error("An error occurred during the translation process:", error);
  }
}

main();
