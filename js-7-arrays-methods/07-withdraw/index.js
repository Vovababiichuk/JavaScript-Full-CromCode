// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (clientIndex === -1 || amount > balances[clientIndex]) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// examples
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Jhn', 50)); // ==> 37 (balances array should be [1400, 37, -6])
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])
