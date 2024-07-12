// ==================================Сhaining================================
// ==================================Сhaining================================
// ==================================Сhaining================================

//! ЧЕЙНИНГ - ФУНКЦИИ ВОЗВРАЩАЮЩИЕ ФУНКЦИИ. Методи обьекта повертають ссилку на сам обьекст!!!
//! ЧЕЙНИНГ - Методи обьекта повертають ссилку на сам обьекст!!!
//! ЧЕЙНИНГ - Методи обьекта повертають ссилку на сам обьекст!!!

// calc(3).add(2).mult(4).div(10).substract(5).res();
const calc = initValue => {
  let res = initValue;

  const calculator = {
    add(value) {
      res += value;
      return this;
    },
    mult(value) {
      res *= value;
      return this;
    },
    substract(value) {
      res -= value;
      return this;
    },
    div(value) {
      res /= value;
      return this;
    },
    result() {
      return res;
    },
  };

  return calculator;
};

const res = calc(3).add(2).mult(4).div(10).substract(5).result();

console.log(res); // -3

//! Чейнинг (chaining)
//! Чейнинг (chaining)
//! Чейнинг (chaining)

/*!SECTION
Чейнинг (chaining) в JavaScript – це техніка, яка дозволяє викликати кілька методів на одному об'єкті послідовно, не створюючи проміжних змінних. Це досягається тим, що кожен метод повертає об'єкт, на якому він був викликаний (або новий об'єкт). Завдяки цьому можна "зчепити" виклики методів один за одним.

Ось приклад чейнінгу з використанням масивів:

```javascript
let result = [1, 2, 3, 4, 5]
  .map(num => num * 2)     // [2, 4, 6, 8, 10]
  .filter(num => num > 5)  // [6, 8, 10]
  .reduce((sum, num) => sum + num); // 24

console.log(result); // 24
```

Інший приклад з об'єктами:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
    return this; // повертаємо сам об'єкт для чейнінгу
  }

  setJob(job) {
    this.job = job;
    return this; // повертаємо сам об'єкт для чейнінгу
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
    return this; // повертаємо сам об'єкт для чейнінгу
  }
}

let person = new Person('Alice')
  .setAge(25)
  .setJob('Developer')
  .display(); // Name: Alice, Age: 25, Job: Developer
```

У цьому прикладі методи `setAge`, `setJob` та `display` повертають сам об'єкт `Person`, що дозволяє їх викликати послідовно на одному екземплярі об'єкта. Це дозволяє зручно і компактно записувати код.
*/

//! ==================================Рекурсія================================
//! ==================================Рекурсія================================
//! ==================================Рекурсія================================
//! Суть Рекурсії - що ми в тілі ф-ї визиваєм її саму!!!

// const favorites = ['id-6', 'id-17'];

// const tree = {
// 	id: 'id-1',
// 	name: 'Products',
// 	nodes: [
// 		{
// 			id: 'id-2',
// 			name: 'Food',
// 			nodes: [
// 				{
// 					id: 'id-6',
// 					name: 'Drinks',
// 					nodes: []
// 				}
// 			]
// 		},
// 		{
// 			id: 'id-17',
// 			name: 'Vehicles',
// 			nodes: []
// 		}
// 	]
// }

const favorites = ['id-6', 'id-17'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [],
        },
      ],
    },
    {
      id: 'id-17',
      name: 'Vehicles',
      nodes: [],
    },
  ],
};

const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    // рекурсія
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

console.log(markFavorites(tree, favorites));

// Рекурсія - це техніка програмування, коли функція викликає сама себе. Це може бути корисно для вирішення завдань, які можуть бути розбиті на більш прості або аналогічні підзадачі. Вона часто використовується для обходу дерев структур даних, розгалужених алгоритмів та інших завдань.

// function factorial(n) {
// 	if (n === 0) {
// 			return 1;
// 	} else {
// 			return n * factorial(n - 1);
// 	}
// }

// // Приклад виклику функції:
// let result = factorial(5);
// console.log(result); // Виведе 120

//! =====================Каррирование======================
//! =====================Каррирование======================
//! =====================Каррирование======================

// const sum = (a, b) => a + b;
// const curriedSum = a => b => a + b;

// const add3 = curriedSum(3);

// const res3 = add3(5);
// console.log(res3); // 8

// Каррирование (currying) — це техніка трансформації функції, яка приймає кілька аргументів, у функцію, яка послідовно приймає один аргумент і повертає нову функцію, що очікує наступний аргумент. Це дозволяє створювати нові функції, фіксуючи деякі аргументи вихідної функції.

// // Функція, що додає три числа
// function add(a, b, c) {
// 	return a + b + c;
// }

// // Каррирована версія функції
// function curryAdd(a) {
// 	return function(b) {
// 			return function(c) {
// 					return a + b + c;
// 			};
// 	};
// }

// // Використання каррированої функції
// let result = curryAdd(1)(2)(3); // 6
// console.log(result); // Виведе 6

// // Або з проміжними кроками
// let add1 = curryAdd(1);
// let add1And2 = add1(2);
// let finalResult = add1And2(3); // 6
// console.log(finalResult); // Виведе 6

// Каррирование може бути особливо корисним у функціональному програмуванні, оскільки дозволяє створювати нові функції з фіксованими аргументами, що може зробити код більш модульним і читабельним.

// JavaScript також надає можливість каррирования за допомогою сучасних функцій. Наприклад, використовуючи стрілкові функції:

// const curryAdd = a => b => c => a + b + c;

// let result = curryAdd(1)(2)(3); // 6
// console.log(result); // Виведе 6

// Існують також бібліотеки, такі як lodash, які пропонують готові рішення для каррирования:
// const _ = require('lodash');

// const add = (a, b, c) => a + b + c;
// const curriedAdd = _.curry(add);

// let result = curriedAdd(1)(2)(3); // 6
// console.log(result); // Виведе 6

// Каррирование може значно спростити роботу з функціями та зробити ваш код більш функціональним і гнучким.

//! =====================Композиція======================
//! =====================Композиція======================
//! =====================Композиція======================

// f
// g

// f(g(value))

// Композиція
// f*g(value)

// compose

// compose(func1, func2, ...) =>

// doEverything



const add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

const compose = (...funcs) => value => {
	return funcs.reduce((acc, func) => func(acc), value)
};

const doEverything = compose(add3, mult2, div4);

console.log(doEverything(3));
console.log(doEverything(5));

