import { name } from "./package.json";

// 处理scss
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import copy from "rollup-plugin-copy";

const file = (type) => `dist/${name}.${type}.js`;

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"],
};

export default [
  {
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
        targets: [
          { src: "src/style/icon/icon.ttf", dest: "dist/style/icon" },
          { src: "src/style/icon/icon.woff", dest: "dist/style/icon" },
        ],
      }),
    ],
  },
];
