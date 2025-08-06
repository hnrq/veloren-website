import { defineCollection, z } from "astro:content";
import { type FileMetadata } from "@google-cloud/storage";
import he from "he";

const blog = defineCollection({
  loader: async () => {
    const response = await fetch(import.meta.env.VELOREN_ARTICLES_URL);

    const data = await response.json();

    return Promise.all(
      (data.items ?? []).map(async ({ mediaLink, name }: FileMetadata) => {
        const item = await (await fetch(mediaLink as string)).json();

        return {
          id: name,
          ...item,
          cover: item.cover,
          summary: item.content.replace(/<[^>]*>/g, "").slice(0, 250),
          content: he.encode(item.content, { allowUnsafeSymbols: true }),
          language: name?.split("/")[0].toLowerCase(),
        };
      }),
    );
  },
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    content: z.string(),
    date: z.string().transform((date) => new Date(date)),
    source_url: z.string().optional(),
    cover: z.string().url().optional(),
    summary: z.string().optional(),
    language: z.enum(["es", "pt-br"]),
  }),
});

export const collections = { blog };
