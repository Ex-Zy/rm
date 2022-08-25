import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt";

const isProduction = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  modules: ["@formkit/nuxt"],
  css: ["element-plus/dist/index.css", "@formkit/themes/genesis"],
  target: "static",
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "@api": fileURLToPath(new URL("./api/", import.meta.url)),
    "@helpers": fileURLToPath(new URL("./helpers/", import.meta.url)),
  },
  typescript: {
    shim: false,
  },
  build: {
    transpile: [
      "@apollo/client/core",
      "@vue/apollo-composable",
      "ts-invariant/process",
      ...(isProduction ? ["dayjs", "element-plus"] : []),
    ],
    extractCSS: true,
  },
});
