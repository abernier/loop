

[![NPM version](https://img.shields.io/npm/v/@abernier/loop.svg?style=flat)](https://www.npmjs.com/package/@abernier/loop)

# INSTALL

```js
import Loop from 'https://unpkg.com/@abernier/loop@1.0.4'
```

# Usage

At max speed (`requestAnimationFrame`):

```js
const myLoop = new Loop((t1, t0) => {
  console.log(`dt: ${t1 - t0}`)
})

myLoop.start()

// ...

myLoop.stop()
```

At given speed (`setTimeout`):

```js
const myLoop = new Loop((t1, t0) => {
  console.log(`dt: ${t1 - t0}`)
}, 1000)

myLoop.start()

// ...

myLoop.stop()
```