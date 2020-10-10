import Vue from 'vue'

import type { WithEvents } from '../src'

interface Events {
  foo: string
  bar: [string, number]
  baz: undefined
}

export default (Vue as WithEvents<Events>).extend({
  name: 'Component',
  data() {
    return {
      foo: 'foo',
    }
  },
  computed: {
    bar(): string {
      return 'bar'
    },
  },
  methods: {
    method() {
      this.$emit('foo', this.foo)
      this.$emit('bar', 'bar', 0)
      this.$emit('baz')
    },
  },
})
