/*
let i = 0
const loop1 = new Loop((t1, t0) => {
  console.log(`tick (dt=${t1-t0})`)
  if (i++ > 50) return false
}).start()
*/

// Execute a callback at regular interval (always passing the current timestamp)
function periodicTimeout(cb, interval) {
  return setTimeout(() => {
    const timestamp = performance.now()
    cb(timestamp)
  }, interval)
}

const noop = () => {}

class Loop {
  constructor(f = noop, interval = 0) {
    this.id = undefined
    this.f = f
    this.interval = interval
  }

  start() {
    if (this.id) {
      // already started, no need to start
      console.warn("This loop has already started")
      return
    }

    const method = this.interval > 0 ? periodicTimeout : window.requestAnimationFrame

    //
    // animLoop
    //

    let lastCallAt
    const animLoop = (timestamp) => {
      // tick
      const ret = this.f(timestamp, lastCallAt)

      // stop if f returned false
      if (ret === false) {
        this.stop()
        return
      }
      lastCallAt = timestamp

      // loop
      this.id = method(animLoop, this.interval) // 2nd argument is only userful for `periodicTimeout`
    }

    //
    // INIT
    //

    animLoop()

    return this
  }

  stop() {
    if (!this.id) {
      // already stopped, no need to stop
      console.warn("This loop has not started yet")
      return
    }

    const method = this.interval > 0 ? clearTimeout : window.cancelAnimationFrame
    method(this.id)

    this.id = undefined

    return this
  }
}

exports default Loop