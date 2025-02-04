# vue-typed-emit

> TypeScript utility type for Vue.js `$emit`

[![BuildStatus](https://img.shields.io/github/actions/workflow/status/andrewvasilchuk/vue-typed-emit/integrate.yml?branch=master)](https://github.com/andrewvasilchuk/vue-typed-emit/actions/workflows/integrate.yml)
[![Version](https://img.shields.io/npm/v/vue-typed-emit)](https://www.npmjs.com/package/vue-typed-emit)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/vue-typed-emit)](https://bundlephobia.com/result?p=vue-typed-emit)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0a12c2d8dbd44f028aacddb254df983d)](https://www.codacy.com/gh/andrewvasilchuk/vue-typed-emit/dashboard?utm_source=github.com&utm_medium=referral&utm_content=andrewvasilchuk/vue-typed-emit&utm_campaign=Badge_Grade)
[![Downloads](https://img.shields.io/npm/dt/vue-typed-emit)](https://www.npmjs.com/package/vue-typed-emit)
[![LastCommit](https://img.shields.io/github/last-commit/andrewvasilchuk/vue-typed-emit)](https://github.com/andrewvasilchuk/vue-typed-emit/commits/master)
[![License](https://img.shields.io/npm/l/vue-typed-emit)](https://github.com/andrewvasilchuk/vue-typed-emit/blob/master/LICENSE)

> ❗ This library is intended to be used with Vue `<3`. Vue 3 [provided a way to type emits](https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits).

## Installation

### Via NPM

```bash
$ npm i vue-typed-emit -D
```

### Via Yarn

```bash
$ yarn add vue-typed-emit --dev
```

### Usage

### Options API

```ts
import Vue from 'vue'
// import type { WithEvents } from 'vue-typed-emit' TypeScript 3.8+
import { WithEvents } from 'vue-typed-emit'

interface Events {
  foo: string
  bar: [string, number]
  baz: undefined
}

export default (Vue as WithEvents<Events>).extend({
  name: 'Component',
  methods: {
    method() {
      this.$emit('foo', 'foo')
      this.$emit('bar', 0)
      this.$emit('baz')
    },
  },
})
```

<details>
<summary>Extending extended components</summary>

```ts
// YourAwesomeExtendedComponent.vue
// ...

export default Vue.extend({
  // ...
  methods: {
    baz() {},
  },
  // ...
})
```

```ts
// ...
import YourAwesomeExtendedComponent from 'path/to/your/awewsome/extended/component'

export default (
  YourAwesomeExtendedComponent as WithEvents<
    WithEvents,
    typeof YourAwesomeExtendedComponent
  >
).extend({})
```

</details>

### Composition API

```ts
import { SetupContext, defineComponent } from '@vue/composition-api'
// import type { CompositionAPIEmit } from 'vue-typed-emit' TypeScript 3.8+
import { CompositionAPIEmit } from 'vue-typed-emit'

interface Events {
  foo: string
  bar: [string, number]
  baz: undefined
}

interface ExtendedSetupContext extends SetupContext {
  emit: CompositionAPIEmit<Events>
}

export default defineComponent({
  name: 'Component',
  setup(props, { emit }: ExtendedSetupContext) {
    emit('foo', 'foo')
    emit('bar', 0)
    emit('baz')
  },
})
```

## Motivation

If your project is written using TypeScript + Vue.js, likely your components have some "contracts" – props they receive and events they emit. `vue-typed-emit` is aimed to ensure that your components adhere to the contract they claimed when it comes to events emitting and corresponding payloads.

## Caveats

### Array payload

If event payload is type of of `Array` it should be defined this way.

```ts
interface Events {
  foo: [string[]]
}
```

## Tests

```bash
npm run test
```

## Build

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
