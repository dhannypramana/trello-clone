<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import type { Emit, Props } from ".";

const props = defineProps<Props>();
const emits = defineEmits<Emit>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    :placeholder="placeholder"
    v-model="modelValue"
    :class="
      cn(
        'flex h-10 w-full rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring transition',
        props.class
      )
    "
  />
</template>
