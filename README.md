# vue-typed-emit

> TypeScript utility type for Vue.js `$emit`

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

```ts
import Vue from 'vue'
import { WithEvents } from 'vue-typed-emit'

interface Events {
  foo: string
  bar: [string, number]
  baz: undefined
}

export default (Vue as WithEvents<Refs>).extend({
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

export default (YourAwesomeExtendedComponent as WithRefs<
  Refs,
  typeof YourAwesomeExtendedComponent
>).extend({})
```

</details>

## Motivation

If your project is written using TypeScript + Vue.js, likely your components have some "contracts" – props they receive and events they emit. `vue-typed-emit` is aimed to ensure that you components adhere to the contract they claimed when it comes to events emitting and corresponding payloads.

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
