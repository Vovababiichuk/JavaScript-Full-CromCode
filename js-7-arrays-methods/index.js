// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 3 === 0) {
//       specialNumbers.push(numbers[i]);
//     }
//   }
//   return specialNumbers;
// };

// console.log(getSpecialNumbers([3, 45, 8, 10]));

// ==========================================

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];

//   function checkIfSpecialNumber(num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   }

//   numbers.forEach(checkIfSpecialNumber);

//   return specialNumbers;
// };

// console.log(getSpecialNumbers([3, 45, 8, 10]));

//! =======================forEach()=============================

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];

//   numbers.forEach(num => {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };

// console.log(getSpecialNumbers([3, 45, 8, 10]));

//! =========================Filter() - true=====================

// const getSpecialNumbers = numbers =>
// 	numbers.filter(num => num % 3 === 0);

// console.log(getSpecialNumbers([3, 45, 8, 10, 18, 23, 27]));

//! ==========================Sort()=======================

// const sortArray = arr => arr.slice().sort((a, b) => a - b);
// console.log(sortArray([3, 45, 8, 10, 18, 23, 27, 4]))

//! =======================reduce()==========================

// const flatArray = arr => arr.reduce((acc, curr) => acc + curr, 0);
// console.log(flatArray([3, 45, 8, 10, 18, 23, 27, 4]));

// const flatArray = arr => arr.reduce((acc, curr) => acc.concat(curr), []);
// console.log(flatArray([3, 54, 7, [5, [76, 100], 3], 89]));

//! =======================flat()==========================

// const arrTest = [3, 54, 7, [5, [76, 100], 3], 89];
// console.log(arrTest.flat(Infinity));

//! =======================indexOf() - return index first el or -1, filter(), includes()==========================

// 1. Find passed students
// 2. Add Good job

// const getMessagesForPassStudents = (allStudents, failedStudents) =>
//   allStudents
// 		.filter(nameStudent => !failedStudents.includes(nameStudent))
// 		.map(nameStudent => `Good job, ${nameStudent}`);

// console.log(getMessagesForPassStudents(['Tom', 'John', 'Bob', 'Julia'], ['John', 'Bob']));
