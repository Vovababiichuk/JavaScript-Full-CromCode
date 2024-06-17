const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Ann' }, { name: 'Tom' }, { name: 'John' }],
  room2: [{ name: 'Pol' }, { name: 'Julia' }, { name: 'Bob' }],
  room3: [{ name: 'Denis' }, { name: 'Laurie' }],
  room4: [{ name: 'Matt' }],
};

const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(room => room.name);

console.log(getPeople(rooms)); // list name
