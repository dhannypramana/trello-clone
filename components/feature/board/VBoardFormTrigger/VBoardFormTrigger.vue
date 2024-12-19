<script setup lang="ts">
import { Plus } from "lucide-vue-next";
import type { Emit } from ".";

const VBoardForm = resolveComponent("VBoardForm");
const emit = defineEmits<Emit>();

function toogleComponent() {
  emit("toogle", VBoardForm);
}
</script>

<template>
  <VButton
    variant="ghost"
    class="bg-gray-300 justify-start w-1/3 lg:w-1/5 p-5"
    @click="toogleComponent"
  >
    <Plus />
    Add another list
  </VButton>
</template>
