# vue-typed-emit

> TypeScript utility type for Vue.js `$emit`

[![BuildStatus](https://img.shields.io/github/workflow/status/andrewvasilchuk/vue-typed-emit/Integration)](https://github.com/andrewvasilchuk/vue-typed-emit/actions?query=workflow%3AIntegration)
[![Version](https://img.shields.io/npm/v/vue-typed-emit)](https://www.npmjs.com/package/vue-typed-emit)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/vue-typed-emit)](https://bundlephobia.com/result?p=vue-typed-emit)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0a12c2d8dbd44f028aacddb254df983d)](https://www.codacy.com/gh/andrewvasilchuk/vue-typed-emit/dashboard?utm_source=github.com&utm_medium=referral&utm_content=andrewvasilchuk/vue-typed-emit&utm_campaign=Badge_Grade)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/andrewvasilchuk/vue-typed-emit.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrewvasilchuk/vue-typed-emit/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrewvasilchuk/vue-typed-emit.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrewvasilchuk/vue-typed-emit/context:javascript)
[![Downloads](https://img.shields.io/npm/dt/vue-typed-emit)](https://www.npmjs.com/package/vue-typed-emit)
[![LastCommit](https://img.shields.io/github/last-commit/andrewvasilchuk/vue-typed-emit)](https://github.com/andrewvasilchuk/vue-typed-emit/commits/master)
[![License](https://img.shields.io/npm/l/vue-typed-emit)](https://github.com/andrewvasilchuk/vue-typed-emit/blob/master/LICENSE)

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

export default (YourAwesomeExtendedComponent as WithEvents<
  WithEvents,
  typeof YourAwesomeExtendedComponent
>).extend({})
```

</details>

## Motivation

If your project is written using TypeScript + Vue.js, likely your components have some "contracts" – props they receive and events they emit. `vue-typed-emit` is aimed to ensure that your components adhere to the contract they claimed when it comes to events emitting and corresponding payloads.

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
