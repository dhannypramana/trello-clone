<script setup lang="ts">
import { Ellipsis as VEllipsis } from "lucide-vue-next";
import type { Props } from ".";

defineProps<Props>();
</script>

<template>
  <div
    class="bg-gray-300 rounded-md w-full md:w-1/3 lg:w-1/5 p-2.5 space-y-2 flex-shrink-0 h-fit cursor-move select-none"
  >
    <div class="flex items-center justify-between px-4 py-1">
      <h3 class="font-semibold">{{ title }}</h3>
      <VEllipsis class="cursor-pointer" />
    </div>

    <VBoardItem />

    <VButton variant="ghost" class="w-full justify-start">Add a card</VButton>
  </div>
</template>
