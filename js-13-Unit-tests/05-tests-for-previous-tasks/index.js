export const reverseArray = arr => (Array.isArray(arr) ? arr.slice().reverse() : null);

// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray([1, true, 3, -4, 5, -12]));

export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (clientIndex === -1 || amount > balances[clientIndex]) {
    return -1;
  }

  const newBalances = [...balances];

  newBalances[clientIndex] -= amount;
  return newBalances[clientIndex];
};

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])

const CHECK_AGE = 18;
export const getAdults = obj => {
  const res = {};
  Object.entries(obj).forEach(([name, age]) => {
    if (age >= CHECK_AGE) {
      res[name] = age;
    }
  });
  return res;
};

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
// console.log(getAdults({})); // ==> {}
