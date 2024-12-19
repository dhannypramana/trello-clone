<script setup lang="ts">
import { PackageCheck } from "lucide-vue-next";
</script>

<template>
  <RouterLink to="/" class="flex items-center space-x-2">
    <PackageCheck fill="purple" />
    <h1 class="text-2xl font-semibold">Taskly</h1>
  </RouterLink>
</template>
