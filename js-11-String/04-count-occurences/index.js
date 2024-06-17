const countOccurrences = (str, text = '') => {
  if (!str) {
    return null;
  }

  return text.split(str).length - 1;
};

console.log(countOccurrences('cd', 'abcd efgh'));
