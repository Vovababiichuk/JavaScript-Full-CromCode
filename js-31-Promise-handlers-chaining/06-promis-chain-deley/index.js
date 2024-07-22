export const delay = (timeDelay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timeDelay)
  })
}

delay(3000).then(() => console.log('Done'));