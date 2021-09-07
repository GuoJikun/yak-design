const navbar = require("./config/navbar.js");
const sidebar = require("./config/sidebar.js");
const plugins = require("./config/plugins.js");

module.exports = {
  title: "fox-design",
  description: "vue通用组件库fox-design",
  themeConfig: {
    nav: navbar,
    sidebar: sidebar,
  },
  plugins,
};
