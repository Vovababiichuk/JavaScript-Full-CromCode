function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    let sqrtI = Math.sqrt(i);
    for (let j = 2; j <= sqrtI; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

getPrimes(10);

/*

function getPrimes(num) {
  const isPrime = num => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  for (let i = 2; i <= num; i++)
    if (isPrime(i)) console.log(i);
}

getPrimes(10);

*/
