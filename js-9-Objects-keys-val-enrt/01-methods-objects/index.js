const getAdults = obj => {
  const CHECK_AGE = 18;
  console.log(
    Object.entries(obj)
      .filter(age => age[1] >= CHECK_AGE)
      .map(name => name[0]),
  );
};

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({}));
