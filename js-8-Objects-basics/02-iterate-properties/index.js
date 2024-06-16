//! =====================for in===============================
// const concatProps = obj => {
//   const arr = [];
//   for (let key in obj) {
//     arr.push(obj[key]);
//   }
//   return arr;
// };

// // examples
// console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
//! =====================for in===============================
const concatProps = obj => Object.values(obj);

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
console.log(concatProps({}));
