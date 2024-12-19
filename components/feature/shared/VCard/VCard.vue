<script lang="ts" setup>
import type { Props } from ".";

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="
      cn(
        'bg-gray-300 rounded-md w-full md:w-1/3 lg:w-1/5 p-2.5 space-y-2 flex-shrink-0 h-full max-h-screen overflow-y-scroll select-none',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
