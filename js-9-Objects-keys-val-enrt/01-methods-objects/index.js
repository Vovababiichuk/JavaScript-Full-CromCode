const CHECK_AGE = 18;
const getAdults = obj =>
  Object.entries(obj)
    .filter(age => age[1] >= CHECK_AGE)
    .map(name => name[0]);

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({}));
