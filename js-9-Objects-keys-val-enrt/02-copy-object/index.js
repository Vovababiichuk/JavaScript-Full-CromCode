const copyObj = obj => ({ ...obj });

console.log(copyObj({ name: 'Tom', age: 98, role: 'developer' }));
