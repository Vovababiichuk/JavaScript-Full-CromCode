const str = '1 + 2';

const calc = expression => {
  const [a, operator, b] = expression.split(' ');
  let res;

  switch (operator) {
    case '+': {
      res = +a + +b;
      break;
    }
    case '-': {
      res = a - b;
      break;
    }
    default: {
      return 'Error';
    }
  }
  return `${expression} = ${res}`;
};

console.log(calc('1 + 2'));
console.log(calc('1 - 6'));
console.log(calc('-1 - 6'));
console.log(calc('-0 - 6'));
