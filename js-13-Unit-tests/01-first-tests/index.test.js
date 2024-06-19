import { getEvenNumbers } from './index';

test('17 equal 17', () => {
  expect(17).toEqual(17);
});

test('18 not equal 17', () => {
  expect(18).not.toEqual(17);
});

test('should return only even numbers', () => {
  const res = getEvenNumbers([1, 2, 3, 4, 5, 88, 45, 66]);
  expect(res).toEqual([2, 4, 88, 66]);
});
