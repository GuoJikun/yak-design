<template>
  <span
    :class="['yak-icon', names, { 'is-spin': spin }]"
    :style="styles"
  ></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const prefix = "yak";

export default defineComponent({
  name: `${prefix}Icon`,
  props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
    size: {
      type: [Number, String],
      default: "16px",
    },
    color: String,
    spin: Boolean,
  },
  computed: {
    names(): string {
      if (this.name) {
        return `yak-icon-${this.name}`;
      }
      return "";
    },
    styles() {
      const style: {
        name?: string;
        fontSize?: string | number;
        color?: string;
      } = {};
      if (this.size) {
        const type = typeof this.size;
        if (type === "string") {
          style["fontSize"] = this.size;
        } else {
          style["fontSize"] = `${this.size}px`;
        }
      }
      if (this.color) {
        style["color"] = this.color;
      }
      return style;
    },
  },
});
</script>
