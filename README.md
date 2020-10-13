# INSTALL

```js
import Loop from 'https://unpkg.com/loop@:version/:file'
```

```js
import Loop from 'loop'
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