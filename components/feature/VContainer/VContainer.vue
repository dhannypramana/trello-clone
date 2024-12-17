<script lang="ts" setup>
import type { Props } from ".";

const props = defineProps<Props>();
</script>

<template>
  <section :class="cn('max-w-screen-xl mx-auto', props.class)">
    <slot />
  </section>
</template>
