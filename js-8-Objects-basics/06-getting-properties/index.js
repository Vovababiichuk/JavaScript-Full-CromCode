// input: {}, []
// output: {}

//! ===============================================
// const pickProps = (obj, props) => {
//   const newObj = {};
//   for (let key in obj) {
//     props.forEach(el => {
//       if (key === el) {
//         return (newObj[key] = obj[key]);
//       }
//     });
//   }
//   return newObj;
// };

// // examples
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({}, ['a', 'c', 'd', 'hex']));

//! ===============================================
// const pickProps = (obj, props) => {
//   const newObj = {};
//   props.forEach(prop => {
//     if (obj.hasOwnProperty(prop)) {
//       newObj[prop] = obj[prop];
//     }
//   });
//   return newObj;
// };

// // examples
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({}, ['a', 'c', 'd', 'hex'])); // ==> {}

//! ===============================================

// function pickProps(obj, props) {
//   return Object.fromEntries(Object.entries(obj).filter(([key]) => props.includes(key)));
// }

// // Приклади:
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({}, ['a', 'c', 'd', 'hex'])); // ==> {}
