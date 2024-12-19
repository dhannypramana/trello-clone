<script lang="ts" setup>
import type { Props } from ".";

const props = defineProps<Props>();
</script>

<template>
  <section :class="cn('container', props.class)">
    <slot />
  </section>
</template>
