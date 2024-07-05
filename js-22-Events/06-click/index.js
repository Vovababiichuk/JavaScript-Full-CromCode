const btn = document.querySelector('.single-use-btn');

const handleClick = () => {
  console.log('clicked');
  btn.removeEventListener('click', handleClick);
}

btn.addEventListener('click', handleClick);