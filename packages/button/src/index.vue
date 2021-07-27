<template>
  <button
    class="ins-button"
    :disabled="disabled"
    :class="[
      'ins-button--' + type,
      'ins-button--' + size,
      { 'is-disabled': disabled },
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-loading': loading },
    ]"
  >
    <Icon
      name="arrow-repeat"
      spin
      v-show="loading"
      size="14px"
      class="ins-button-loading"
    ></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const prefix = "yak";
import Icon from "pkg/icon/src/index.vue";

export default defineComponent({
  name: `${prefix}Button`,
  components: { Icon },
  props: {
    type: {
      type: String,
      default: "default",
      validator(value: string): boolean {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
          "text",
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: "default",
      validator(value: string): boolean {
        return ["default", "large", "small", "mini"].includes(value);
      },
    },
    disabled: {
      type: Boolean,
    },
    plain: {
      type: Boolean,
    },
    round: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
