const counterEl = document.querySelector('.counter');
const counterValueEl = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__btn');

  if (!isButton) {
    return;
  }

  const { action } = e.target.dataset;
  const oldValue = Number(counterValueEl.textContent);
  const newValue = action === 'increase' ? oldValue + 1 : oldValue - 1;

  localStorage.setItem('counterValue', newValue);
  counterValueEl.textContent = newValue;
};

counterEl.addEventListener('click', onCounterChange);

const onStorageChange = (e) => {
  counterValueEl.textContent = e.newValue;
}

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueEl.textContent = localStorage.getItem('counterValue') || 0;
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);