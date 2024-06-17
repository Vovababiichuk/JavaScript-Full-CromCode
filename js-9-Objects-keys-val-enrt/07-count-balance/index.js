const getTotalRevenue = transactions => {
  return transactions.reduce((acc, trans) => acc + trans.amount, 0);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

console.log(getTotalRevenue(dayTransactions)); // ==> 310
