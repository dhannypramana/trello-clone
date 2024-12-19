import type { HTMLAttributes } from "vue";

export { default as VInput } from "./VInput.vue";

export interface Props {
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
  placeholder?: HTMLInputElement["placeholder"];
}

export interface Emit {
  "update:modelValue": [payload: string | number];
}
