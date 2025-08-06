import { defineMiddleware, sequence } from "astro:middleware";
import { middleware } from "astro:i18n";
import { setLocale } from "@paraglide/runtime";

export const paraglideMiddleware = defineMiddleware(async (ctx, next) => {
  setLocale(ctx.currentLocale as "es" | "pt-br");
  return next();
});

export const onRequest = sequence(
  middleware({
    redirectToDefaultLocale: false,
    prefixDefaultLocale: true,
    fallbackType: "redirect",
  }),
  paraglideMiddleware,
);
