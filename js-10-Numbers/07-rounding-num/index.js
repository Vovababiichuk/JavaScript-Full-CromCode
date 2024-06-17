const superRound = (num, prec) => {
  const factor = 10 ** prec;
  return [
    +(Math.floor(num * factor) / factor).toFixed(prec),
    +(Math.trunc(num * factor) / factor).toFixed(prec),
    +(Math.ceil(num * factor) / factor).toFixed(prec),
    +(Math.round(num * factor) / factor).toFixed(prec),
    +num.toFixed(prec),
  ];
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(-11.12556, 2)); // ==> [-11.13, -11.12, -11.12, -11.13, -11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
