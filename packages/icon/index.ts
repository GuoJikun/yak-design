import Icon from "./src/index.vue";
import { App } from "vue";

Icon.install = (app: App) => {
  app.component(Icon.name, Icon);
};

export default Icon;
