// var a = 17;

// if (a) {
//   var a = 1;
//   console.log(a);
// }

// console.log(a);

// 1
// 1

// ================================

// let a = 17;

// if (a) {
//   let a = 1;
//   console.log(a);
// }

// console.log(a);

// 1
// 17

// ============var - ВСПЛИВАЄ=============

// var a;
// console.log(a);
// a = 17;
// console.log(a);

// ==============================

// var greeting = 'Hello';

// function sayHi() {
//   greeting = 'Hi';
//   console.log(greeting);

//   if (false) {
//     var greeting;
//   }
// }

// sayHi();
// console.log(greeting);

// Hi
// Hello

// ====================================
// var arr = [];
// for (var i = 0; i < 10; i += 1) {
//   arr[i] = function () {
//     return i;
//   };
// }

// console.log(arr[5]());
