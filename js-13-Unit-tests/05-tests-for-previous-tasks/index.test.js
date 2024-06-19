import { reverseArray, withdraw, getAdults } from './index';

describe('reverseArray function', () => {
  it('should return reverse array', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it('should return reverse array', () => {
    expect(reverseArray([1, true, 3, -4, 5, -12])).toEqual([-12, 5, -4, 3, true, 1]);
  });

  it('should return null if input is not array', () => {
    expect(reverseArray('String Test')).toEqual(null);
  });
});

describe('withdraw function', () => {
  it('should return the account balance', () => {
    expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)).toEqual(37);
  });

  it('should return -1 if client not found', () => {
    expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Unknown', 50)).toEqual(-1);
  });

  it('should return -1 if amount exceeds balance', () => {
    expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)).toEqual(-1);
  });
});

describe('getAdults function', () => {
  it('should be returned the object with persons who are 18 years of age or older', () => {
    expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({ 'John Doe': 19, Bob: 18 });
  });

  it('should be returned the object with persons who are 18 years of age or older', () => {
    expect(getAdults({ Ann: 56, Andrey: 7 })).toEqual({ Ann: 56 });
  });

  it('should be returned empty object if input is empty object', () => {
    expect(getAdults({})).toEqual({});
  });
});
