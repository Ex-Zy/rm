import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(ElementPlus);
});
