function bind(func, context, ...initialArgs) {
  return function (...laterArgs) {
    return func.call(context, ...initialArgs, ...laterArgs);
  };
}

// Приклад використання:
const obj = {
  x: 42,
};

function getX(y) {
  return this.x + y;
}

const boundGetX = bind(getX, obj, 5);

console.log(boundGetX(10)); // 52
