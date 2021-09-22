import resolve from "@rollup/plugin-node-resolve";
// import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import { name } from "./package.json";
import { uglify } from "rollup-plugin-uglify";

// 处理scss
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import copy from "rollup-plugin-copy";

const file = (type) => `dist/${name}.${type}.js`;

const generateCss = () => {
  const styleList = ["button", "col", "icon", "row", "switch"];
  return styleList.map((c) => {
    return {
      input: `src/style/${c}.scss`,
      output: {
        file: `dist/style/${c}.css`,
      },
      plugins: [
        postcss({
          extensions: [".css"],
          extract: true,
          plugins: [postcssImport()],
        }),
      ],
    };
  });
};

export default [
  {
    input: "src/components/index.ts",
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
      typescript({
        tsconfig: "./tsconfig.json",
        extensions: [".js", ".ts", ".tsx"],
      }),
      vue(),
      uglify(),
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
          { src: "src/style/icon/icon.ttf", dest: "dist/style/icon" },
          { src: "src/style/icon/icon.woff", dest: "dist/style/icon" },
        ],
      }),
    ],
  },
  ...generateCss(),
];
