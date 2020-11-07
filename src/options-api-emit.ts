import type { Events } from './private/events'
import type { GenericEmit } from './private/generic-emit'

export interface OptionsAPIEmit<T extends Events, V extends Vue>
  extends GenericEmit<T, V> {}
