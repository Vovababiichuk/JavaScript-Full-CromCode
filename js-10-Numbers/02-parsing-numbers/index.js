const getParsedIntegers = arr => arr.map(num => Number.parseInt(num, 10));

console.log(getParsedIntegers([2.5, -6, NaN, 7.8, -99, Infinity, 5, 33]));

const getParsedIntegersV2 = arr => arr.map(num => parseInt(num, 10));

console.log(getParsedIntegersV2([2.5, -6, NaN, 7.8, -99, Infinity, 5, 33]));

const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));

console.log(getParsedFloats([2.5, -6, ' 7.8', -99, 'text3.14', 5, 33]));

const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));

console.log(getParsedFloatsV2([2.5, -6, ' 7.8', -99, 'text3.14', 5, 33]));
