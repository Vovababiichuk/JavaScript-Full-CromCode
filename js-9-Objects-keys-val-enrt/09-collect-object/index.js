function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => {
    acc[key] = valuesList[index];
    return acc;
  }, {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
console.log(buildObject(keys, values)); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
