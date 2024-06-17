const getFiniteNumbers = arr => arr.filter(num => Number.isFinite(num));

console.log(getFiniteNumbers([2, -6, NaN, 78, -99, Infinity, -Infinity]));

const getFiniteNumbersV2 = arr => arr.filter(num => isFinite(num));

console.log(getFiniteNumbersV2([2, -6, NaN, 78, -99, Infinity, -Infinity]));

const getNaN = arr => arr.filter(num => Number.isNaN(num));

console.log(getNaN([2, -6, NaN, 78, -99, Infinity, -Infinity]));

const getNaNV2 = arr => arr.filter(num => isNaN(num));

console.log(getNaNV2([2, -6, NaN, 78, -99, Infinity, -Infinity]));

const getIntegers = arr => arr.filter(num => Number.isInteger(num));

console.log(getIntegers([2.5, -6, NaN, 7.8, -99, Infinity, 5, 33]));
