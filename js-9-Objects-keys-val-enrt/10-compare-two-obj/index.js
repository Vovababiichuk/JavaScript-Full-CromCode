// function compareObjects(firstObj, secondObj) {
//   const keysFirstObj = Object.keys(firstObj);
//   const keysSecondObj = Object.keys(secondObj);
//   const valuesFirstObj = Object.values(firstObj);
//   const valuesSecondObj = Object.values(secondObj);

//   if (keysFirstObj.length !== keysSecondObj.length) {
//     return false;
//   }

//   return (
//     keysFirstObj.every(key => keysSecondObj.includes(key)) &&
//     valuesFirstObj.every(value => valuesSecondObj.includes(value))
//   );
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj5 = {
//   age: 17,
//   name: 'Tom',
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true
// console.log(compareObjects(obj4, obj5)); // ==> true

//! =====================================================

function compareObjects(firstObj, secondObj) {
  const keysFirstObj = Object.keys(firstObj);
  const keysSecondObj = Object.keys(firstObj);

  if (keysFirstObj.length !== keysSecondObj.length) {
    return false;
  }

  return keysFirstObj.every(key => key in secondObj && firstObj[key] === secondObj[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
