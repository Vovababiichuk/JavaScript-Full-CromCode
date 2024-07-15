//! Асинхронний код завжди буде виконаний після синхронного коду

const main = () => {
  console.log('1');
  setTimeout(() => console.log('2'), 1000);
  console.log('3');
  setTimeout(() => console.log('4'), 0);
};

main();
console.log('5');
