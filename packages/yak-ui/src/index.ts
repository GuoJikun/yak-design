import { App } from "vue";
import Button from "@/components/button/src/index.vue";
import Icon from "@/components/icon/src/index.vue";
import Row from "@/components/row/src/index.vue";
import Col from "@/components/col/src/index.vue";
// import Icon from "./button/src/index.vue";
// import Icon from "./button/src/index.vue";

const components = [Button, Icon, Row, Col];

const install = (app: App) => {
  components.forEach((component) => app.component(component.name, component));
};

export default { ...components, install };

export { Button, Icon, Row, Col };
