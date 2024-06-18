const calc = str => {
  const [a, operator, b] = str.split(' ').map(el => el.trim());

  const num1 = Number(a);
  const num2 = Number(b);

  if (operator === '/' && num2 === 0) {
    return 'Error: Division by zero';
  }

  let res;
  switch (operator) {
    case '+':
      res = +num1 + +num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
      break;
    default:
      return 'Error: Invalid operator';
  }
  return `${str} = ${res}`;
};

console.log(calc('1 + 2'));
console.log(calc('10 - 2'));
console.log(calc('13 * 2'));
console.log(calc('18 / 2'));
console.log(calc('18 / 0'));
console.log(calc('18 % 0'));
