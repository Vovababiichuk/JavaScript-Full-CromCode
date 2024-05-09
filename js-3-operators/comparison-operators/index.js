/* Результатом сравнения является булевое значение */

/* Сравнение чисел */
const a = 17;
const b = 5;
console.log('a > b:', a > b);
console.log('a <= b:', a <= b);
console.log('a == b:', a == b);
console.log('a != b:', a != b);

/* Сравнение строк */
console.log("'a' < 'b':", 'a' < 'b');
console.log("'ab' > 'a':", 'ab' > 'a');

/* При сравнении переменных разных типов они преобразуются в числа */
console.log("'17' > 1:", '17' > 1);

/* Строгое сравнение */
console.log('17 === 1:', 17 === 1);
console.log('17 === 17:', 17 === 17);
console.log("17 === '17':", 17 === '17');
console.log('17 === true:', 17 === true);
console.log("'0' === '':", '0' === '');
console.log('true === false:', true === false);
console.log('true === true:', true === true);
console.log('null === undefined:', null === undefined);
console.log('false === 0:', false === 0);

/* Нестрогое сравнение */
console.log("17 == '17':", 17 == '17');
console.log("'0' == '':", '0' == '');
console.log("0 == '':", 0 == '');
console.log('null == undefined:', null == undefined);
console.log('false == 0:', false == 0);

/* Осторожно c null и undefined */
console.log('undefined == null:', undefined == null);
console.log('undefined == 0:', undefined == 0);
console.log('null == 0:', null == 0);
console.log('undefined < 0:', undefined < 0);
console.log('undefined > 0:', undefined > 0);