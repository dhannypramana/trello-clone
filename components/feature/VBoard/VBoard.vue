<script setup lang="ts">
import { Ellipsis as VEllipsis } from "lucide-vue-next";
</script>

<template>
  <div
    class="bg-gray-300 rounded-md w-full md:w-1/5 p-2.5 space-y-2 flex-shrink-0 h-fit fixed cursor-move select-none"
  >
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-1">
      <h3 class="font-semibold">On Progress</h3>
      <VEllipsis class="cursor-pointer" />
    </div>

    <!-- Content -->
    <VBoardItem />

    <!-- Footer -->
    <VButton variant="ghost" class="w-full justify-start">Add a card</VButton>
  </div>
</template>
