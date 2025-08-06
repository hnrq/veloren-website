// @ts-check
import { defineConfig } from "astro/config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";


// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "pt-br"],
    defaultLocale: "pt-br",
    routing: 'manual'
  },

  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        disableAsyncLocalStorage: true,
      }),
    ],
  },
});
