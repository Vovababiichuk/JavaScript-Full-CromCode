/**
 * @param {function} func
 * @param {number} ms
 * @return {function}
 */

function defer(func, ms) {
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'm ${this.name}!`);
  },
};

const deferredSayHi = defer(user.sayHi, 2000);
deferredSayHi.call(user);
