import { createApp } from "vue";
import App from "./App.vue";
import yakUi from "./components/index";
import "./style/index.scss";

createApp(App).use(yakUi).mount("#app");
