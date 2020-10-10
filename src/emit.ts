import type Vue from 'vue'

export interface Emit<T extends Record<string, any | any[]>> {
  <K extends keyof T>(
    eventName: K,
    ...args: T[K] extends undefined
      ? [undefined?]
      : T[K] extends Array<any>
      ? T[K]
      : [T[K]]
  ): Vue
}
