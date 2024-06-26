//! Коли ф-я починає користуватися перемінними із зовнішніх лексичних оточень - це називається ЗАМИКАННЯ!!!
//! По простому - завжди коли ми використовуємо зовнішню змінну ми користуємося замиканням!!!
//! Замикання - це ф-я і цепочка лексичних оточень до яких вона має доступ.
//! Замикання - це ф-я і всі зовнішні перемінні до яких вона має доступ!

/*
Коли функція починає використовувати змінні з зовнішніх лексичних оточень, це називається замиканням. Замикання в JavaScript відбувається, коли функція зберігає доступ до змінних з батьківського контексту, навіть після того, як батьківська функція завершила своє виконання.

Це дозволяє функціям зберігати стан і взаємодіяти зі змінними, які були оголошені поза ними. Замикання є потужним інструментом для роботи з асинхронним кодом, обробки подій та багатьма іншими сценаріями.
*/

// counter

const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
