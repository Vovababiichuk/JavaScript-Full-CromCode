const buttons = document.querySelectorAll('.btn');

const handleClick = e => {
  console.log(e.target.textContent);
};

buttons.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
