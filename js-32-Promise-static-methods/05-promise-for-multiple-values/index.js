const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * Створіть проміс і присвойте його змінній resultPromise,
 * щоб у консоль вивелася сума всіх чисел з трьох промісів
 */

export const resultPromise = Promise.all([promiseNumber1, promiseNumber2, promiseNumber3]);

resultPromise
  .then(numbersList => {
    console.log(numbersList); // [67, 23, 8]
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result);
  });
