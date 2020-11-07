import Vue from 'vue'
import { SetupContext, defineComponent } from '@vue/composition-api'

import { WithEvents, CompositionAPIEmit } from '../src'

interface Events {
  foo: string
  bar: undefined
  baz: [string, number]
}

export const OptionsAPIComponent = (Vue as WithEvents<Events>).extend({
  name: 'OptionsAPIComponent',
  props: {
    foo: {
      type: String,
      required: true,
    },
  },
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
  setup(props, { emit }: ExtendedSetupContext) {
    emit('foo', 'foo')
    // $ExpectError
    emit('foo', 1)
    emit('bar')
    // $ExpectError
    emit('bar', 'bar')
    emit('baz', 'baz', 256)
    // $ExpectError
    emit('baz', true, {})
  },
})

interface ExtendedSetupContext extends SetupContext {
  emit: CompositionAPIEmit<Events>
}

interface Props {
  foo: string
}

export const CompositionAPIComponent = defineComponent({
  name: 'CompositionAPIComponent',
  props: {
    foo: {
      type: String,
      required: true,
    },
  },
  setup(props: Props, { emit }: ExtendedSetupContext) {
    emit('foo', 'foo')
    // $ExpectError
    emit('foo', 1)
    emit('bar')
    // $ExpectError
    emit('bar', 'bar')
    emit('baz', 'baz', 256)
    // $ExpectError
    emit('baz', true, {})
  },
})
