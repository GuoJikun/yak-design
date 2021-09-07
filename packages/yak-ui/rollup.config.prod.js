import nodeResolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import { name } from "./package.json";
import { resolve } from "path";

// 处理scss
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import copy from "rollup-plugin-copy";

const file = (type) => `dist/${name}.${type}.js`;

export default [
  {
    input: resolve(__dirname, "./src/index.ts"),
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
      alias({
        entries: [
          {
            find: "yak-ui",
            replacement: resolve(__dirname, "./src"),
          },
        ],
      }),
      nodeResolve([".js", ".ts", ".tsx"]),

      typescript({
        tsconfig: "./tsconfig.json",
        extensions: ["js", ".ts", ".tsx"],
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      }),
      vue({
        defaultLang: { script: "ts" },
      }),

      commonjs({
        include: ["node_modules/**", "node_modules/**/*"],
      }),
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
        targets: [
          { src: "src/style/icon/icon.eot", dest: "dist/style/icon" },
          { src: "src/style/icon/icon.svg", dest: "dist/style/icon" },
          { src: "src/style/icon/icon.ttf", dest: "dist/style/icon" },
          { src: "src/style/icon/icon.woff", dest: "dist/style/icon" },
        ],
      }),
    ],
  },
];
