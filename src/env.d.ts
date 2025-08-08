interface ImportMetaEnv {
  readonly VELOREN_ARTICLES_URL: string;
  readonly VELOREN_SERVER_HOST: string;
  readonly VELOREN_SERVER_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
