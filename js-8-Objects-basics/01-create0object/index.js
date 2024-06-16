//! =====================forEach===============================
// const transformToObject = arr => {
//   const obj = {};

//   arr.forEach(el => {
//     obj[el] = el;
//   });
//   return obj;
// };

// // examples
// console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
// console.log(transformToObject([]));

//! =====================reduce======================

// const transformToObject = arr => {
//   return arr.reduce((acc, curr) => {
//     acc[curr] = curr;
//     return acc;
//   }, {});
// };

// // examples
// console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
// console.log(transformToObject([]));

//! ====================formEntries=======================

const transformToObject = arr => {
  return Object.fromEntries(arr.map(el => [el, el]));
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
console.log(transformToObject([]));
