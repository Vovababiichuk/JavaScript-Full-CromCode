const text = 'skdbljfbhvajfhbvlshbcjashc';

const splitText = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }

  let res = '';
  let startPosition = 0;

  while (startPosition < text.length) {
    const chunk = text.substring(startPosition, startPosition + len);
    if (chunk) {
      res += chunk[0].toUpperCase() + chunk.slice(1) + '\n';
    }
    startPosition += len;
  }
  return res.trim();
};

console.log(splitText(text, 4));
