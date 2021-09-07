import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import copy from "rollup-plugin-copy";

export default {
  input: "src/style/index.scss",
  output: {
    file: "dist/style/index.css",
  },
  plugins: [
    postcss({
      extensions: [".css"],
      extract: true,
      plugins: [postcssImport()],
    }),
    copy({
      targets: [{ src: "src/style/icon/*", dest: "dist/style/icon" }],
    }),
  ],
};
