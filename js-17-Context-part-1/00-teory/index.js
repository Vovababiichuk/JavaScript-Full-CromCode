//! this - ссылка на обьект!!!
//! this - ссылка на обьект!!!

//! this - динамічний в JS і визначається в момент визову ф-ї!!!

//! =================this==============================

// const user = {
//   name: 'John',
//   age: 17,
// };

// user.walk = function walk() {
//   console.log("I'm walking");
// };

// user.sayHi = function () {
//   console.log(`I am ${this.name}`);
// };

// user.sayHi();

//! ================================================

// const user = {
//   name: 'John',
//   age: 17,
//   sayHi(num) {
//     console.log(num);
//     console.log(`I am ${this.name}`);
//   },
// };

// user.sayHi(45);

//! ================================================

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user.getFullName();

//! =========================================

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// // user.getFullName();

// const funс = user.getFullName;

// funс(); // undefined undefined - //! ВТРАТА КОНТЕКСТУ ВІДБУЛАСЯ!!!

//! ======================bind()==============================

//! bind() - фіксуєм конткекст (привязує контекст до ф-ї)
//! bind() - повертає ф-ю
//! bind() - далі контекст змінити не можливо

// const user = {
//   name: 'John',
//   getName() {
//     console.log(this.name);
//   },
// };

// const funс = user.getName.bind(user);
// const funс2 = user.getName.bind({ name: 'Tom' });

// funс(); // John
// funс2(); // Tom

//! ======================call()==============================

// const user = {
//   name: 'John',
//   getName() {
//     console.log(this.name);
//   },
// };

// const funс = user.getName;

// funс.call({ name: 'Bob' }); // Bob

//! ======================apply()==============================

// const user = {
//   name: 'John',
//   seyHi(age, message) {
//     console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
//   },
// };

// const funс = user.seyHi;
// funс.apply({ name: 'Bob' }, [43, 'Hello!']);

// const anotherUther = {
//   name: 'Tom',
// };

// const funс2 = user.seyHi;

// //! different between call and apply!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// funс2.apply(anotherUther, [23, 'Hello']);
// funс2.call(anotherUther, 23, 'Hello');

//! ===============================PRACTICE==================================
//! ===============================PRACTICE==================================

// const callbackPrompt = {
//   message: 'Tell me your number',
//   showPrompt() {
//     const phoneNumber = prompt(this.message);
//     console.log(phoneNumber);
//   },
//   showDeferredPrompt(ms) {
//     // setTimeout(() => this.showPrompt(), ms);
//     setTimeout(this.showPrompt.bind(this), ms);
//   },
// };

// // callbackPrompt.showPrompt();
// callbackPrompt.showDeferredPrompt(2000);

//! ===============================PRACTICE==================================
//! ===============================PRACTICE==================================

// defer - function wrap

// function defer(func, ms) {
//   return function () {
//     setTimeout(func, ms);
//   };
// }

// const sayHi = () => {
//   console.log('Hi!');
// };

// // sayHi();

// const deferredSayHi = defer(sayHi, 2000);

// deferredSayHi();

// ======================================
// ======================================

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func(...arguments), ms);
//   };
// }

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const deferredSum = defer(sum, 2000);

// deferredSum(3, 5);

// ======================================
// ======================================

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func(...arguments), ms);
//   };
// }

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}!`);
//   },
// };

// const deferredHi = defer(user.sayHi.bind(user), 1000);

// deferredHi();

// ========================call()==============
// ========================call()==============

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func.call(this, ...arguments), ms);
//   };
// }

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}!`);
//   },
// };

// const deferredHi = defer(user.sayHi, 1000);

// deferredHi.call({ name: 'Bob' });

// ========================apply()==============
// ========================apply()==============

//! arguments - ПСЕВДОМАСИВ (не має методів масиву але має властивість Length)

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func.apply(this, arguments), ms);
//   };
// }

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}!`);
//   },
// };

// const deferredHi = defer(user.sayHi, 1000);

// deferredHi.apply({ name: 'Bob' });
