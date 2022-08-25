import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt";

const isProduction = process.env.NODE_ENV === "production";

const nuxtConfig = {
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
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "@api": fileURLToPath(new URL("./api/", import.meta.url)),
    "@helpers": fileURLToPath(new URL("./helpers/", import.meta.url)),
  },
  typescript: {
    shim: false,
  },
  build: {
    transpile: ["@apollo/client/core", "@vue/apollo-composable", "ts-invariant/process"],
    extractCSS: true,
  },
};

if (isProduction) {
  nuxtConfig.build.transpile.push(...["dayjs", "element-plus", "@formkit/nuxt"]);
}

export default defineNuxtConfig(nuxtConfig);
