let numMemory = 0;
console.log(`numMemory = ${numMemory}`);

const add = num1 => {
  numMemory += num1;
};

console.log(add(10));
console.log(`numMemory = ${numMemory}`);

const decrease = num2 => {
  numMemory -= num2;
};

console.log(decrease(2));
console.log(`numMemory = ${numMemory}`);

const reset = () => {
  numMemory = 0;
};

console.log(reset());
console.log(`numMemory = ${numMemory}`);

const getMemo = () => numMemory;

console.log(getMemo());
