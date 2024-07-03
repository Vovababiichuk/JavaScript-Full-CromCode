//! vechicle and shop

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// };

// // vehicle.move();
// console.log(vehicle); // look __proto__

//! __proto__ - Протитип використовується як хранилище для різних методів, властивостів якими можуть користуватися інші обьекти

// [1, 2].map === [5, 6].map // true - це одна і та ж ф-я яка лежить в прототипі масива...

//! ==========================================
// const testArr = [1,2, 3];
// console.log(testArr); // look __proto__

// console.log([23, 4].map === [2, 4].map) // true

//! ======================__PROTO__====================
//! ======================__PROTO__====================
//! ======================__PROTO__====================

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// };

// const ship = {
//   name: 'Aurora',
//   hasWeels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
//   __proto__: vehicle,
// };

// ship.move();
// console.log(ship);

//! ======================Getter/Setter====================
//! ======================Getter/Setter====================
//! ======================Getter/Setter====================

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const [firstName, lstName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lstName
//   },
// };

// console.log(user.fullName); // John Doe

// user.fullName = 'Tom Hardy';

// console.log(user.fullName); // Tom Hardy
// console.log(user.firstName); // Tom

//! ======================SetPrototypeOf()====================

// const vehicle = {
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: 'Aurora',
//   hasWeels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// ship.move(); // Aurora moving
// console.log(ship);

//! Потрібно враховувати власні властивості і унаслідувані властивості...
//! Потрібно враховувати власні властивості і унаслідувані властивості...
//! Потрібно враховувати власні властивості і унаслідувані властивості...
// Приклад

// for (let prop in ship) {
//   console.log(prop); // виводе всі властивості (влісні і унаслідувані)
// }

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop); // виведе тільки власні властивості
//   }
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(Object.keys(ship)); // отримуєм тільки власні властивості

//! =======================Function CONSTRUCTOR========
//! =======================Function CONSTRUCTOR========
//! =======================Function CONSTRUCTOR========

//! Constructors - це ф-ї які служать для створення обьекта!!!

//! XОРОША практика ЗБЕРІГАТИ ВСІ МЕТОДИ В ПРОТОТИПІ - ДЛЯ ЕКОНОМІЇ ПАМЯТІ...

//! У КОЖНОГО обьекта є ссилка на ОБЬЕКТ ПРОТОТИП куда цей обьект іде за методами і властивостями якщо даних методів і властивостів не було знайдено у нього...

//! Function CONSTRUCTOR - може бути будь-яка ф-я окрім Arrow Function
//! Є домовленість - якщо function is constructor то її потрібно називати з Великої літери

// user

// function User(name, age) {
//   // {}
//   this.name = name;
//   this.age = age;

//   // return {...}
// }

// const user2 = new User('Tom', 23); // Ф-я конструктор стіорює новий обьект і наповнює його даними
// console.log(user2);

//! =====================================

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.seyHy = function () {
//     console.log(`Hi, I am ${this.name}`);
//   };
// }

// const user1 = new User('Tom', 23);
// console.log(user1);
// user1.seyHy();

// const user2 = new User('Bob', 21);
// console.log(user2);
// user2.seyHy();

// console.log(user2.seyHy === user1.seyHy); // false при кожному виклику конструктора ми створюєм нову ф-ю....

//! Це не оптимально по памяті... тому є механізм .... prototype
//! Це не оптимально по памяті... тому є механізм .... prototype

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.seyHy = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// const user1 = new User('Tom', 17);
// const user2 = new User('Bob', 21);

// console.log(user1);

// user1.seyHy();


//! ===================================

// console.log('abc'.split()); // ['abc']
// console.log(1..toFixed(2)); // 1.00