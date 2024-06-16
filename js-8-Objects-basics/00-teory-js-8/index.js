// const transformToObject = arr => {
//   const obj = {};

//   arr.forEach(el => {
//     obj[el] = el;
//   });

//   return obj;
// };

// console.log(transformToObject([1, 'text'])); // {1: 1, text: 'text'}

//! ==========================================

// const a = {};
// const b = a;
// console.log(a === b); // true

//! ==========================================

// const name = 'Tom';

// const user = {
// name, // if name: name (you can write - name)
// };

// console.log(user);

//! ==========================================

// const user = {
//   name: 'John',
//   age: 45,
//   status: 'married',
// };

// for (const el in user) {
//   console.log(user[el]);
// }

// ???????????????????????????????????????????????????
// Object.keys(user).forEach(el => {
//   console.log(user[el]);
// });

//! ==========================================

// const user = {
//   name: 'John',
//   age: 45,
//   status: 'married',
// };

// const concatProps = obj => {
//   let arr = [];

//   for (let key in obj) {
//     // arr.push(obj[key]);
//     arr = arr.concat(obj[key]);
//   }
//   return arr;
// };

// console.log(concatProps(user));

//! ==========================================

// const user = { name: 'Vova', age: '34' };
// const num = { one: '1', two: '2' };

// console.log(Object.assign(user, num));
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
