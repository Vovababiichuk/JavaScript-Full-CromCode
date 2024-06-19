import getSum, { getSquaredNumbers, getOddNumbers } from './calculator';

// it('17 is Africa', () => {
//   expect(17).toEqual(17);
// });
// it('18 not equal 17', () => {
//   expect(18).not.toEqual(17);
// });

// const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

// it('should get only even numbers from array', () => {
//   const res = getEvenNumbers([1, 2, 3, 4]);

//   expect(res).toEqual([2, 4]);
// });

//! ============================================

it('should get only squared numbers', () => {
  const res = getSquaredNumbers([1, 2, 3]);
  expect(res).toEqual([1, 4, 9]);
});
it('should get only odd numbers', () => {
  const res = getOddNumbers([1, 2, 3, 4, 5]);
  expect(res).toEqual([1, 3, 5]);
});
it('should get sum numbers', () => {
  const res = getSum(10, 20);
  expect(res).toEqual(30);
});
