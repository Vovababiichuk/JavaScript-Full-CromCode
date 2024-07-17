//! Асинхронний код завжди буде виконаний після синхронного коду

const main = () => {
  console.log('1');
  setTimeout(() => console.log('2'), 1000);
  console.log('3');
  setTimeout(() => console.log('4'), 0);
};

main();
console.log('5');


/* !SECTION

(() => {
  console.log(1);
  setTimeout(() => console.log(2), 0);
})();
console.log(3);

Ви можете скоротити код, об'єднавши виклик функції `Fn` з визначенням функції, а також видаливши зайву функціональність. Ось скорочений варіант:

```javascript
(() => {
  console.log('1');
  setTimeout(() => console.log('2'), 0);
})();
console.log('3');
```

### Пояснення:
1. **Самовиконувана функція (IIFE)**: Використовується для того, щоб оголосити та виконати функцію одразу, без необхідності окремого виклику.
2. **Асинхронний виклик**: `setTimeout(() => console.log('2'), 0);` залишається незмінним для демонстрації асинхронного виконання.
3. **Синхронний виклик**: `console.log('3');` виконується після того, як самовиконувана функція завершує своє виконання.

### Результат:
1. `1` (виконується одразу)
2. `3` (виконується одразу після `1`)
3. `2` (виконується після синхронних викликів)

Цей скорочений код забезпечує ту саму функціональність, що й оригінальний, але з меншою кількістю коду.

*/

