'use strict';

//! Втрата контекста

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this.name);
//   },
// };

// // obj.sayHi(); // Tom

// const func = obj.sayHi;

// func(); // втрата контекста

//! ===============================

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//     // this - в режимі роботи браузера ссилається на глобальний обьект!!!
//   },
// };

// // obj.sayHi(); // Tom

// const func = obj.sayHi;

// func(); // втрата контекста

//! ===============================

// var a = 1;

// console.log(window.a); // 1

// let b = 2;

// console.log(window.b); // undefined

//! Краще так якщо щось глобально потрібно хранити
//! Краще так якщо щось глобально потрібно хранити
//! Краще так якщо щось глобально потрібно хранити

// window.user = {
//   id: 1,
//   name: 'Bob',
// };

//! Якщо включений режим use strict
//! Якщо включений режим use strict
//! Якщо включений режим use strict

// console.log(this); // ссілка на глобальний обьект (window)

// function test() {
//   console.log(this); // undefined
// }

// test();

//! Одне із розповсюджених мість де можна втратити контекст - це CALLBACK
//! Одне із розповсюджених мість де можна втратити контекст - це CALLBACK
//! Одне із розповсюджених мість де можна втратити контекст - це CALLBACK

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// const func = user.sayHi;
// func(); // undefined

// setTimeout(user.sayHi, 2000); // Втрата контекста
//! Як це виправити?
//! Як це виправити?
//! Як це виправити?
//! bind()
//! bind()
// setTimeout(user.sayHi.bind(user), 2000); // {name: 'Tom', sayHi: ƒ}

//! Arrow Function
// setTimeout(() => user.sayHi(), 2000); // {name: 'Tom', sayHi: ƒ}

//! Arrow Function - не має свого this і вона ссилається на зовнішній this
//! Arrow Function - вона використовує зовнішній контекст

// const party = {
//   guests: [
//     { name: 'Tom', email: 'tom@gmail.com', age: 17 },
//     { name: 'Bob', email: 'bob@gmail.com', age: 18 },
//   ],
//   message: 'Welcome to the party',
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         text: `Hi ${name}. ${this.message} `,
//         email,
//       }));
//   },
// };

// console.log(party.getInvitations());

//! Заимствование методов
//! Заимствование методов
//! Заимствование методов

// const wallet = {
//   transactions: [1, 5, 89, 337, 3],
//   getMax() {
//     return Math.max(...this.transactions);
//   },
//   getMin() {
//     return Math.min(...this.transactions);
//   },
// };

// console.log(wallet.getMin());
// console.log(wallet.getMax());

//! =================Pseudo Array=====================

// function func() {
//   // console.log(typeof arguments); // object
//   console.log(arguments);
// }

// func(1, 2, 3, 4);

//! У псевдомасивів немає метождів роботи з масивами
//! Тому корисний тут механізм - Заимствование методов

// function argsSum() {
//   return [].reduce.call(
//     arguments,
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0,
//   );
// }

// console.log(argsSum(1, 2, 3, 4));

//! Можна псевдомасив привратити в звичайний масив за допомогою ...Spread
//! Можна псевдомасив привратити в звичайний масив за допомогою ...Spread
//! Можна псевдомасив привратити в звичайний масив за допомогою ...Spread

function argsSum(rest) {
  return [...rest].reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(argsSum(1, 2, 3, 4));
