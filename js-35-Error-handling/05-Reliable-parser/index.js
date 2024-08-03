export const parserUser = (strJson) => {
  return JSON.parse(strJson) ? JSON.parse(strJson) : null;
}