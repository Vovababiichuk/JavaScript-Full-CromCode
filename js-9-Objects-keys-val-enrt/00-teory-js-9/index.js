// const user = {
//   name: 'Vova',
//   age: 38,
//   role: 'developer',
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

//! ==============entries==============

// const users = {
//   Vova: 20,
//   Tom: 18,
//   Julia: 45,
//   Bob: 14,
// };

// const getAdults = usersObj =>
//   Object.entries(usersObj)
//     .filter(user => user[1] >= 18)
//     .map(user => user[0]);

// console.log(getAdults(users));

//! ============values================

// const users = {
//   Vova: 20,
//   Tom: 18,
//   Julia: 45,
//   Bob: 14,
// };

// const getAdults = usersObj => Object.values(usersObj);

// console.log(getAdults(users));

//! ============COPY OBJECT================

// const user = {
//   name: 'Vova',
//   age: 38,
//   role: 'developer',
//   cars: {
//     mazda: true,
//     opel: false,
//   },
// };

// console.log(user);

// const users = {
//   Vova: 20,
//   Tom: 18,
//   Julia: 45,
//   Bob: 14,
// };

// const copyObj = { ...user, ...users };
// copyObj.name = 'TTTTT';
// console.log(copyObj);

//! ==================DESTRUCTURING OBJECT========================

// const { name } = user;
// console.log(name);

// const { name: myName } = user; // rename key
// console.log(myName);

// const { surname: myName = 'default' } = user; // if not exist variable we set default value
// console.log(myName);

// const { name, ...restProps } = user; // rename key
// console.log(name);
// console.log(restProps);

// const player = {
//   game: 'football',
//   ...restProps,
// };
// console.log(player);

//! ==================DESTRUCTURING ARRAY========================

// const arr = [1, 4, 6];
// const [start, four, end] = arr;
// console.log(end);

//! ========================Method Array=============================

// const user = {
//   name: 'Vova',
//   age: 38,
//   role: 'developer',
//   cars: {
//     mazda: true,
//     opel: false,
//   },
//   sayHi: () => {
//     console.log('Hi!!!');
//   },
// };

// user.sayHi();

//! ============Behaviour of primitive dates as an object==================

// [1, 2].forEach()
//  'text'.toUppercase()
// 1..toFixed()
// 1.87.toFixed()
