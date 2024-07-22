export const asyncCalculator = numbr => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  }).then(value => {
    return new Promise(resolve => {
      setTimeout(() => {
        const squaredValue = value * value;
        console.log(`Squared value: ${squaredValue}`);
        resolve(squaredValue);
      }, 500);
    });
  }).then(squaredValue => {
    const doubledValue = squaredValue * 2;
    console.log(`Doubled value: ${doubledValue}`);
    return doubledValue;
  });
};

asyncCalculator(5)
  .then(result => {
    console.log(`Final result: ${result}`);
  })
  .catch(err => {
    console.error('An error occurred:', err);
  });
