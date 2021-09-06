<template>
  <component
    :is="tag"
    :class="[
      'ins-col',
      span ? `ins-col-${span}` : '',
      offset ? `ins-col-offset-${offset}` : '',
    ]"
    :style="{
      padding: `0 ${gutter / 2}px`,
    }"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
const prefix = "yak";

export default defineComponent({
  name: `${prefix}Col`,
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: [Number, String],
    offset: [Number, String],
  },
  setup() {
    return {
      gutter: inject("gutter") as any,
    };
  },
});
</script>
