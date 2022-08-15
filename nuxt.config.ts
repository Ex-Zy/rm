import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt";

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
    "element-plus/dist/index.css": fileURLToPath(new URL("./node_modules/element-plus/dist/index.css", import.meta.url)),
    "element-plus": fileURLToPath(new URL("./node_modules/element-plus/dist/index.full.js", import.meta.url)),
    "@api": fileURLToPath(new URL("./api/", import.meta.url)),
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },
  plugins: ["~/plugins/element.plus"],
  vite: {
    optimizeDeps: {
      include: ["element-plus"],
    },
  },
  typescript: {
    shim: false,
  },
});
