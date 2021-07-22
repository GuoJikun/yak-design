import { App } from "vue";
import Button from "./button/src/index.vue";
import Icon from "./button/src/index.vue";

const components = [Button, Icon];

const install = (app: App) => {
  components.forEach((component) => app.component(component.name, component));
};

export default { ...components, install };

export { Button };
