import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      pkg: resolve(__dirname, "src/components"),
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["."],
    },
  },
  build: {
    lib: {
      formats: ["es", "umd"],
      entry: "src/index.ts",
    },
  },
});
