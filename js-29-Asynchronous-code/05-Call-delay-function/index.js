export function delay(delay, callback, context, arg1, arg2, arg3, ...args) {
  setTimeout(() => {
    callback.call(context, arg1, arg2, arg3, ...args)
  }, delay)
}

console.log(delay(2000, console.log, null, 'hello', 'world', '!!!'));