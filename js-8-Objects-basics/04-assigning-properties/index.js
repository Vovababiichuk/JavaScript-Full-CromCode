const user = {
  name: 'Tom',
  age: 17,
};

/* присвой объекту свойство hobby со значением 'football' с помощью точки */
user.hobby = 'footbal';
/* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
const anotherKey = 'married';
user.anotherKey = false;
/* присвой объекту свойство 'favorite music' со значением 'rock' */
user['favorite music'] = 'rock';
/* присвой объекту свойство 'address', которое будет пустым объкетом */
user.address = {};
/* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
const countryKey = 'country';
user.address[countryKey] = 'Ukraine';
/* присвой объекту в 'address' свойство 'building', со значением 17 */
const buildingKey = 'building';
user.address[buildingKey] = 17;
/* выведи в консоль итоговый объект user */
console.log(user);
