export const asyncCalculator = numbr => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  });
};

asyncCalculator(5)
  .then(value => {
    return new Promise(resolve => {
      setTimeout(() => {
        const res = value * value;
        console.log(`Squared value: ${res}`);
        resolve(res);
      }, 500);
    });
  })
  .then(value => {
    const doubledValue = value * 2;
    console.log(`Doubled value: ${doubledValue}`);
    return doubledValue;
  })
  .catch(err => {
    console.error('An error occurred:', err);
  });
