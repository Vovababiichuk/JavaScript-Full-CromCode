import getMinSquaredNumber from './getMinSquaredNumber';

test('Should return null if input is empty array', () => {
  const res = getMinSquaredNumber([]);
  expect(res).toEqual(null);
});

test('Should return null if input is string', () => {
  const res = getMinSquaredNumber(['String check']);
  expect(res).toEqual(null);
});

test('Should return the square of the min number on the abs', () => {
  const res = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(res).toEqual(4);
});
