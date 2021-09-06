import Row from "./src/index.vue";

Row.install = (app: any): void => {
  app.component(Row.name, Row);
};

export default Row;
