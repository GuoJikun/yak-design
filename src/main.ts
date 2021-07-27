import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import yakDesign from "pkg";
import "./style/index.scss";
import "vite-plugin-vuedoc/style.css";

const app = createApp(App);
app.use(router);
app.use(yakDesign);
app.mount("#app");
