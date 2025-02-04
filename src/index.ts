import type Vue from 'vue'
import type { VueConstructor } from 'vue'

import type { Events } from './private/events'
import type { OptionsAPIEmit } from './options-api-emit'

export type WithEvents<
  E extends Events,
  C extends VueConstructor<any> = VueConstructor<Vue>,
> =
  C extends VueConstructor<infer V>
    ? VueConstructor<Omit<V, '$emit'> & { $emit: OptionsAPIEmit<E, V> }>
    : never

export { CompositionAPIEmit } from './composition-api-emit'
