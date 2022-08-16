import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const isProduction = process.env.NODE_ENV === "production";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  },
  typescript: {
    shim: false,
  },
  build: {
    transpile: ["@apollo/client/core", "@vue/apollo-composable", "ts-invariant/process", "element-plus"],
  },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
