import type { HTMLAttributes } from "vue";

export { default as VContainer } from "./VContainer.vue";

export interface Props {
  class?: HTMLAttributes["class"];
}
