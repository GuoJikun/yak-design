<script setup lang="ts">
const typeList = [
  {
    type: "",
    text: "默认",
  },
  {
    type: "primary",
    text: "primary",
  },
  {
    type: "warning",
    text: "warning",
  },
  {
    type: "success",
    text: "success",
  },
  {
    type: "danger",
    text: "danger",
  },
  {
    type: "info",
    text: "info",
  },
  {
    type: "text",
    text: "text",
  },
];
</script>

<template>
  <yak-button v-for="item in typeList" :key="item.text" :type="item.type">{{
    item.text
  }}</yak-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
