const input = document.querySelector('.text-input');

const handleChange = (e) => {
  console.log(e.target.value);
}

input.addEventListener('input', handleChange);