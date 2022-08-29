import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt";

const resolveUrl = (path) => fileURLToPath(new URL(path, import.meta.url));

const isProduction = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  modules: ["@formkit/nuxt"],
  css: ["element-plus/dist/index.css", "@formkit/themes/genesis"],
  target: "static",
  router: {
    base: "/rm/",
  },
  app: {
    baseURL: isProduction ? "/rm/" : "/",
  },
  alias: {
    "@": resolveUrl("./"),
    "@api": resolveUrl("./api/"),
    "@helpers": resolveUrl("./helpers/"),
  },
  typescript: {
    shim: false,
  },
  build: {
    transpile: [
      "@apollo/client/core",
      "@vue/apollo-composable",
      "ts-invariant/process",
      "dayjs",
      ...(isProduction ? ["element-plus"] : []),
    ],
    extractCSS: true,
  },
});
