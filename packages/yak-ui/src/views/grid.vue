<template>
  <h1>Grid</h1>
  <div>
    <yakRow gutter="12">
      <yakCol :span="12">12</yakCol>
      <yakCol :span="12">12</yakCol>
    </yakRow>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
