import { calc } from './calculator';

describe('calc function', () => {
  it('should correctly add two numbers', () => {
    expect(calc('1 + 2')).toBe('1 + 2 = 3');
  });

  it('should correctly subtract two numbers', () => {
    expect(calc('10 - 2')).toBe('10 - 2 = 8');
  });

  it('should correctly multiply two numbers', () => {
    expect(calc('13 * 2')).toBe('13 * 2 = 26');
  });

  it('should correctly divide two numbers', () => {
    expect(calc('18 / 2')).toBe('18 / 2 = 9');
  });

  it('should handle non-string input', () => {
    expect(calc(123)).toBe('Error: Input must be a string');
  });
});
