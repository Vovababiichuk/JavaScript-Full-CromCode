export const squaredNumbers = () => {
  const number = document.querySelector('.number');
  const numFive = number.dataset.number;
  const squaredNumFive = numFive ** 2;
  number.setAttribute('data-squared-number', squaredNumFive);
};

squaredNumbers();
