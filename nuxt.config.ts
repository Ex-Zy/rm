import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt/config";

const resolveUrl = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

const isProduction = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@formkit/nuxt"],
  css: ["element-plus/dist/index.css", "@formkit/themes/genesis"],
  alias: {
    "@": resolveUrl("./"),
    "@api": resolveUrl("./api/"),
    "@helpers": resolveUrl("./helpers/"),
    "@types": resolveUrl("./types/"),
  },
  build: {
    transpile: [
      "@apollo/client/core",
      "@vue/apollo-composable",
      "ts-invariant/process",
      ...(isProduction ? ["dayjs", "element-plus"] : []),
    ],
  },
});
