const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  }
  return str.split('').reverse().join('');
};

console.log(reverseString('Level!!!'));
console.log(reverseString('Hello!'));
console.log(reverseString('reverseString'));
