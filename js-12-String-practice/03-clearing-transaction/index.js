const cleanTransactionList = arr =>
  arr
    .map(el => +el)
    .filter(el => !isNaN(el))
    .map(el => `$${el.toFixed(2)}`);

console.log(cleanTransactionList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
