import { resolve } from "path";
import { defineNuxtConfig } from "nuxt";

const isProduction = process.env.NODE_ENV === "production";
const __dirname = new URL(".", import.meta.url).pathname;

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
    "element-plus/dist/index.css": resolve(__dirname, "./node_modules/element-plus/dist/index.css"),
    "element-plus": resolve(__dirname, "./node_modules/element-plus/dist/index.full.js"),
  },
  plugins: ["~/plugins/ui"],
  vite: {
    optimizeDeps: {
      include: ["element-plus"],
    },
  },
});
