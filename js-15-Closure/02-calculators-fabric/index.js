const createCalculator = () => {
  let numMemory = 0;
  return {
    add: num => {
      numMemory += num;
    },
    decrease: num => {
      numMemory -= num;
    },
    reset: () => {
      numMemory = 0;
    },
    getMemo: () => numMemory,
  };
};

const calculator = createCalculator();
const calculatorNext = createCalculator();

console.log(calculator.getMemo()); // 0
calculator.add(3);
console.log(calculator.getMemo()); // 3
calculator.decrease(5);
console.log(calculator.getMemo()); // -2

calculatorNext.add(5);
console.log(calculatorNext.getMemo()); // 5

console.log(calculator.getMemo()); // -2
calculator.reset();
console.log(calculator.getMemo()); // 0

console.log(calculatorNext.getMemo()); // 5
