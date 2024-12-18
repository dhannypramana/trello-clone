<script setup lang="ts">
import { Ellipsis as VEllipsis } from "lucide-vue-next";
</script>

<template>
  <section class="bg-black bg-opacity-40 py-4 text-slate-50">
    <VContainer class="flex items-center justify-between px-10">
      <p class="font-medium">My Board</p>
      <VEllipsis class="hover:cursor-pointer" />
    </VContainer>
  </section>
</template>
