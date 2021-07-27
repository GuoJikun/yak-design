import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import vitePluginVuedoc, { vueDocFiles } from "vite-plugin-vuedoc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginVuedoc({
      highlight: {
        theme: "one-dark",
      },
    }),
    vue({
      include: [...vueDocFiles],
    }),
  ],
  resolve: {
    alias: {
      pkg: resolve(__dirname, "packages"),
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["."],
    },
  },
});
