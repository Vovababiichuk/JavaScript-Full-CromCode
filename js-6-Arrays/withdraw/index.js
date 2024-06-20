function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client && balances[i] >= amount) {
      balances[i] -= amount;
      console.log(balances);
      return balances[i];
    }
  }
  return -1;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
