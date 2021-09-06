<template>
  <component
    :is="tag"
    :class="[
      'ins-row',
      {
        'ins-row--flex': flex,
      },
      `is-align-${align}`,
    ]"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
const prefix = "yak";

export default defineComponent({
  name: `${prefix}Row`,
  props: {
    tag: {
      type: String,
      default: "div",
    },
    gutter: {
      type: Number as PropType<number>,
      default: 0,
    },
    flex: {
      type: Boolean,
      default: false,
    },
    justify: {
      type: String,
      default: "start",
      validator(value: string) {
        return [
          "start",
          "end",
          "center",
          "space-around",
          "space-between",
        ].includes(value);
      },
    },
    align: {
      type: String,
      default: "top",
      validator(value: string) {
        return ["top", "middle", "bottom"].includes(value);
      },
    },
  },
  provide() {
    interface Gutter {
      gutter: number;
    }
    const gutter: Gutter = { gutter: this.gutter };
    return gutter;
  },
});
</script>
