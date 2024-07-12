localStorage.clear();
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(34));
localStorage.setItem('isMarried', JSON.stringify(true));
localStorage.setItem('amount', JSON.stringify(null));
localStorage.setItem('names',  JSON.stringify(['Tom', 'Bob', 'Sam']));
localStorage.setItem('hobbies', JSON.stringify({ sport: 'football' }));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let parsedValue;
    try {
      parsedValue = JSON.parse(value);
    } catch (e) {
      parsedValue = value;
    }
    return {
      ...acc,
      [key]: parsedValue,
    };
  }, {});
};


console.log(getLocalStorageData());
