
export const setItem = (key, value) => {
  console.log('Saving to LocalStorage:', value);
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => JSON.parse(localStorage.getItem(key));
