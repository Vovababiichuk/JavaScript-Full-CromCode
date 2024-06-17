const splitString = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }

  const res = [];
  let startPosition = 0;

  while (startPosition < str.length) {
    let chunk = str.substring(startPosition, startPosition + num);
    startPosition += num;

    if (startPosition >= str.length && chunk.length < num) {
      chunk = chunk.padEnd(num, '.');
    }

    res.push(chunk);
  }
  return res;
};

console.log(splitString('abcd efgh', 4)); // ['abcd', ' efgh']
console.log(splitString('abcd efgh', 3)); // ['abc', 'd e', 'fgh']
