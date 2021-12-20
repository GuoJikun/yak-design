import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "./src/components/index.ts"),
      name: "yak-ui",
      formats: ["es", "umd"],
    },
    watch: {},
  },
});
