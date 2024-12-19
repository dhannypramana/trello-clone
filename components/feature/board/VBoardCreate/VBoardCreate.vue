<script setup lang="ts">
import type { ComputedOptions, ConcreteComponent, MethodOptions } from "vue";

const boardFormTrigger = resolveComponent("VBoardFormTrigger");
const activeComponent = shallowRef(boardFormTrigger);

function toogleComponent(
  component:
    | string
    | ConcreteComponent<{}, any, any, ComputedOptions, MethodOptions, {}, any>
) {
  activeComponent.value = component;
}
</script>

<template>
  <component :is="activeComponent" @toogle="toogleComponent" />
</template>
