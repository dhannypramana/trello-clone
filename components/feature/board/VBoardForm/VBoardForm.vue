<script setup lang="ts">
import { X } from "lucide-vue-next";
import type { Emit } from ".";

const { title } = useBoardField();
const { postBoard } = useBoardCreate();

const VBoardFormTrigger = resolveComponent("VBoardFormTrigger");
const emit = defineEmits<Emit>();

function toogleComponent() {
  emit("toogle", VBoardFormTrigger);
}

async function submitBoardForm() {
  await postBoard(title.value);
  emit("toogle", VBoardFormTrigger);
}
</script>

<template>
  <VCard>
    <form @submit.prevent="submitBoardForm" class="space-y-2">
      <VInput
        v-model="title"
        placeholder="Enter list title ..."
        :auto-focus="true"
      />

      <div class="flex items-center space-x-2">
        <VButton type="submit">Add list</VButton>
        <VButton type="button" variant="unstyled" @click="toogleComponent">
          <X />
        </VButton>
      </div>
    </form>
  </VCard>
</template>
