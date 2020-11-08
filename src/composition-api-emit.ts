import type { Events } from './private/events'
import type { GenericEmit } from './private/generic-emit'

export interface CompositionAPIEmit<T extends Events>
  extends GenericEmit<T, void> {}
