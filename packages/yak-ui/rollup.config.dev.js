import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import { name } from "./package.json";

// 处理scss
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import copy from "rollup-plugin-copy";

const file = (type) => `dist/${name}.${type}.js`;

export default [
  {
    input: "src/index.ts",
    output: [
      {
        name: name,
        file: file("esm"),
        format: "es",
      },
      {
        name: name,
        file: file("umd"),
        format: "umd",
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    ],
    plugins: [
      resolve([".js", ".ts", ".tsx"]),
      babel({ babelHelpers: "bundled" }),
      typescript({
        tsconfig: "./tsconfig.json",
        extensions: [".js", ".ts", ".tsx"],
      }),
      vue(),
    ],
    external: ["vue"],
  },
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
        targets: [{ src: "src/style/icon/*", dest: "dist/style/icon" }],
      }),
    ],
  },
];
