import type Vue from 'vue'
import type { VueConstructor } from 'vue'

import type { Emit } from './emit'

export type WithEvents<
  E extends Record<string, any | any[]>,
  C extends VueConstructor<any> = VueConstructor<Vue>
> = C extends VueConstructor<infer V>
  ? VueConstructor<Omit<V, '$emit'> & { $emit: Emit<E> }>
  : never
