import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/private/frontend/yak-design/node_modules/.pnpm/@vuepress+theme-default@2.0.0-beta.25/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/private/frontend/yak-design/node_modules/.pnpm/@vuepress+theme-default@2.0.0-beta.25/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
