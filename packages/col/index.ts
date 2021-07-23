import Col from "./src/index.vue";

Col.install = (app: any): void => {
  app.component(Col.name, Col);
};

export default Col;
