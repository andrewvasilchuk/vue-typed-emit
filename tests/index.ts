import Vue from 'vue'

import { WithEvents } from '../src'

interface Events {
  foo: string
  bar: undefined
  baz: [string, number]
}
;(Vue as WithEvents<Events>).extend({
  name: 'Component',
  methods: {
    method() {
      this.$emit('foo', 'foo')
      // $ExpectError
      this.$emit('foo', 1)
      this.$emit('bar')
      // $ExpectError
      this.$emit('bar', 'bar')
      this.$emit('baz', 'baz', 256)
      // $ExpectError
      this.$emit('baz', true, {})
    },
  },
})
