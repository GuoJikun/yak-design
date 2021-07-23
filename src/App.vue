<template>
  <header class="layout-header"></header>
  <main class="layout-main">
    <aside class="layout-aside">
      <ul>
        <li>基础</li>

        <router-link to="/grid" custom v-slot="{ navigate }">
          <li @click="navigate" @keypress.enter="navigate" role="link">Grid</li>
        </router-link>

        <li>Form</li>
      </ul>
    </aside>
    <main class="layout-content">
      <router-view></router-view>
    </main>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul,
ol {
  list-style: none;
  margin: 0;
}
.layout-header {
  height: 60px;
}
.layout-main {
  display: flex;
}
.layout-aside {
  width: 200px;
  li {
    line-height: 30px;
  }
}
.layout-content {
  flex: auto;
}
</style>
