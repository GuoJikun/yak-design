<template>
  <header class="layout-header"></header>
  <main class="layout-main">
    <aside class="layout-aside">
      <ul>
        <li>基础</li>
        <router-link to="/grid" custom v-slot="{ navigate }">
          <li @click="navigate" @keypress.enter="navigate" role="link">Grid</li>
        </router-link>
        <router-link to="/button" custom v-slot="{ navigate }">
          <li @click="navigate" @keypress.enter="navigate" role="link">
            Button
          </li>
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 15px;
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
  min-height: calc(100vh-60px);
  border-right: 1px solid #dddddd;
  li {
    line-height: 30px;
    cursor: pointer;
  }
}
.layout-content {
  flex: auto;
  padding: 0 20px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-10 {
  margin-top: 10px;
}
table {
  border-collapse: collapse;
  font-size: 14px;
  min-width: 800px;
}
td {
  color: #333333;
}
td,
th {
  border: 1px solid #dddddd;
  padding: 4px 10px;
  text-align: left;
}
code {
  font-family: Roboto Mono, Monaco, courier, monospace;
  font-size: 14px;
}
</style>
