interface ImportMetaEnv {
  readonly GEMINI_API_KEY: string;
  readonly VELOREN_RSS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
