interface ImportMetaEnv {
  readonly VELOREN_ARTICLES_URL: string;
  readonly VELOREN_SERVER_HOST: string;
  readonly VELOREN_SERVER_PORT: number;
  readonly PUBLIC_SERVER_STATUS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
