export const parseUser = (strJson) => {
  return JSON.parse(strJson) ? JSON.parse(strJson) : null;
}

console.log(parseUser('{"name": "John", "age": 30}'));