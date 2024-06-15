// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (clientIndex === -1 || amount > balances[clientIndex]) {
    return -1;
  }

  const newBalances = [...balances];

  newBalances[clientIndex] -= amount;
  return newBalances[clientIndex];
};

// examples
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Jhn', 50)); // ==> 37 (balances array should be [1400, 37, -6])
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])

/*
Помилка ESLint, яку ви отримуєте, `eslintno-param-reassign`, виникає через спробу змінити вхідний параметр функції `balances` безпосередньо всередині функції. ESLint рекомендує уникати зміни параметрів функцій, оскільки це може призвести до складностей у розумінні і підтримці коду.

У вашій функції `withdraw` ви використовуєте `balances[clientIndex] -= amount;` для зміни значення вхідного масиву `balances`. Це приводить до виникнення помилки ESLint.

Ось як можна покращити цей код, враховуючи рекомендації ESLint:

const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (clientIndex === -1 || amount > balances[clientIndex]) {
    return -1;
  }

  // Створюємо новий масив з оновленим балансом
  const newBalances = [...balances];
  newBalances[clientIndex] -= amount;

  return newBalances[clientIndex];
};

// examples
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1
*/
