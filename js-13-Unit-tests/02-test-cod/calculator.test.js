import getSum, { getSquaredArray, getOddNumbers } from './calculator';

test('Should get only square of number', () => {
  const res = getSquaredArray([2, 4, 8, 10]);
  expect(res).toEqual([4, 16, 64, 100, 0, 400]);
});

test('Should get only odd numbers', () => {
  const res = getOddNumbers([1, 3, 8, 10, 17, 9]);
  expect(res).toEqual([[1, 3, 17, 9]]);
});

test('Should get only sum', () => {
  const res = getSum(33, 4);
  expect(res).toEqual(37);
});
