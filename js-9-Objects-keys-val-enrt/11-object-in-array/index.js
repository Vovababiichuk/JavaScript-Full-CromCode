const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, value]) => ({ ...value, id })) // деструктуризація
    .sort((a, b) => a.age - b.age);
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 45,
  },
};

console.log(getCustomersList(customers));
/*

[
	{
		name: 'Tom',
    age: 17,
		id: 'customer-id-2'
	},
	{
		...
	},
	{
		...
	},

]

*/
