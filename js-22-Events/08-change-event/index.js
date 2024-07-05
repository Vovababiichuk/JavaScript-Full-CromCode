const input = document.querySelector('.text-input');

const handleClick = (e) => {
  console.log(e.target.value);
}

input.addEventListener('input', handleClick)