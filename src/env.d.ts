interface ImportMetaEnv {
  readonly VELOREN_ARTICLES_URL: string;
  readonly PUBLIC_VELOREN_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
