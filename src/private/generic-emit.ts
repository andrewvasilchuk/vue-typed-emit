import type Vue from 'vue'

import type { Events } from './events'

export interface GenericEmit<T extends Events, R extends Vue | void> {
  <K extends keyof T>(
    eventName: K,
    ...args: T[K] extends undefined
      ? [undefined?]
      : T[K] extends Array<any>
      ? T[K]
      : [T[K]]
  ): R
}
