import type { ComputedOptions, ConcreteComponent, MethodOptions } from "vue";

export interface Emit {
  toogle: [
    component:
      | string
      | ConcreteComponent<{}, any, any, ComputedOptions, MethodOptions, {}, any>
  ];
}
