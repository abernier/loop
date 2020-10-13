# INSTALL

```
import Loop from 'https://unpkg.com/loop@:version/:file'
```

```
import Loop from 'loop'
```

# Usage

At max speed (`requestAnimationFrame`):

```
const myLoop = new Loop((t1, t0) => {
  console.log(`dt: ${t1 - t0}`)
})

myLoop.start()

// ...

myLoop.stop()
```

At given speed (`setTimeout`):

```
const myLoop = new Loop((t1, t0) => {
  console.log(`dt: ${t1 - t0}`)
}, 1000)

myLoop.start()

// ...

myLoop.stop()
```