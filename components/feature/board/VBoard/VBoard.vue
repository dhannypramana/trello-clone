<script setup lang="ts">
import { Ellipsis as VEllipsis } from "lucide-vue-next";
import type { Props } from ".";

defineProps<Props>();
</script>

<template>
  <VCard>
    <div class="flex items-center justify-between px-4 py-1">
      <h3 class="font-semibold">{{ title }}</h3>
      <VEllipsis class="cursor-pointer" />
    </div>

    <VBoardItem />

    <VButton type="button" variant="ghost" class="w-full justify-start">
      Add a card
    </VButton>
  </VCard>
</template>
