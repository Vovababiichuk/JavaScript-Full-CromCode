export const calc = initValue => {
  let value = initValue;

  return {
    add(number) {
      value += number;
      return this;
    },
    subtract(number) {
      value -= number;
      return this;
    },
    mult(number) {
      value *= number;
      return this;
    },
    div(number) {
      value /= number;
      return this;
    },
    result() {
      return value;
    },
  };
};

const res = calc(3).add(2).mult(4).div(10).subtract(5).result();
console.log(res);
