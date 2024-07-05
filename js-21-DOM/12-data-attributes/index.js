export const squaredNumbers = () => {
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(number => {
    const num = number.dataset.number ** 2;
    number.setAttribute('data-squared-number', num);
  })
};