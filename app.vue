<template>
  <section class="max-h-screen overflow-hidden">
    <VNavbar />

    <main class="min-h-screen bg-board-background bg-cover bg-center space-y-6">
      <BoardMeta />

      <VContainer class="min-h-screen flex overflow-x-scroll space-x-4">
        <VBoard />
      </VContainer>
    </main>
  </section>
</template>
