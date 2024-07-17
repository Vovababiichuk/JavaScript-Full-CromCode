export const pinger = (count, period) => {
  let currentCount = 0;
  console.log('Ping');

  const intervalId = setInterval(() => {
    if (currentCount < count) {
      console.log('Ping');
      currentCount += 1;
    } else {
      clearInterval(intervalId);
    }
  }, period);

};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
