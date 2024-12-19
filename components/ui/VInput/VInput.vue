<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import type { Emit, Props } from ".";

const emits = defineEmits<Emit>();
const props = withDefaults(defineProps<Props>(), {
  autoFocus: false,
});

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const vAutoFocus = {
  mounted: (el: HTMLInputElement) => {
    if (props.autoFocus) {
      el.focus();
    }
  },
};
</script>

<template>
  <input
    v-model="modelValue"
    :placeholder="placeholder"
    v-auto-focus
    :class="
      cn(
        'flex h-10 w-full rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring transition',
        props.class
      )
    "
  />
</template>
