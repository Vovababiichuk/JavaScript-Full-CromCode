export const parseUser = (strJson) => {
  try {
    return JSON.parse(strJson);
  } catch (err) {
    console.error('Failed to parse JSON', err);
    return null;
  }
}

console.log(parseUser('{"name": "John", "age": 30}'));