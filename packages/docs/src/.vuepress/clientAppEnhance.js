import { defineClientAppEnhance } from "@vuepress/client";

import yakUi from "yak-ui";
import "yak-ui/dist/style/index.css";

// 使用异步函数也是可以的
export default defineClientAppEnhance(({ app }) => {
  // ...
  app.use(yakUi);
});
