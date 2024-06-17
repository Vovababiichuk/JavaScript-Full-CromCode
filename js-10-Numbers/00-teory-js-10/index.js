// const parseArray = arr => arr.map(el => Number.parseFloat(el));

// console.log(parseArray([4, 5.5, 0.876, '  5.7jh', null, NaN, Infinity, undefined]));

//! ====================================

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

//! ====================================

// const multiRound = num => [Math.round(num), Math.floor(num), Math.ceil(num), Math.trunc(num)];

// console.log(multiRound(17.1));

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.PI * 1000); // 3141.592653589793
// console.log(Math.round(Math.PI * 1000)); // 3142

// console.log(Math.PI.toFixed(3)); // 3.142 (String)

//! ====================================

// const getMaxAbsoluteNumber = arr => {
//   let max = -Infinity;

//   arr.ForEach(num => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });

//   return max;
// };

//! ====================================

const getMaxAbsoluteNumber = arr => {
  const absoluteValue = arr.map(num => Math.abs(num));
  return Math.max(...absoluteValue);
};

console.log(getMaxAbsoluteNumber([2, -6, 78, -99]));
