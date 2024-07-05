const btn = document.querySelector('.search__btn');

const handleClick = () => {
  const input = document.querySelector('.search__input');
  console.log(input.value);
};

btn.addEventListener('click', handleClick);
