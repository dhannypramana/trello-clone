<script lang="ts" setup>
const { boards, getBoards } = useBoardRead();
await getBoards();
</script>

<template>
  <section class="max-h-screen overflow-hidden">
    <VNavbar />

    <main class="min-h-screen bg-board-background bg-cover bg-center space-y-6">
      <BoardMeta />

      <VContainer class="min-h-screen flex overflow-x-scroll space-x-4">
        <VBoard v-for="board in boards" :key="board.id" :title="board.title" />
        <VBoardCreate />
      </VContainer>
    </main>
  </section>
</template>
