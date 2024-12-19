<script setup lang="ts">
import { X } from "lucide-vue-next";
import type { Emit } from ".";

const VBoardFormTrigger = resolveComponent("VBoardFormTrigger");
const emit = defineEmits<Emit>();

function toogleComponent() {
  emit("toogle", VBoardFormTrigger);
}
</script>

<template>
  <VCard>
    <VInput placeholder="Enter list title ..." />
    <div class="flex items-center space-x-2">
      <VButton>Add list</VButton>
      <VButton variant="unstyled" @click="toogleComponent">
        <X />
      </VButton>
    </div>
  </VCard>
</template>
