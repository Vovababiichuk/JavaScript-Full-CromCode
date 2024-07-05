const buttons = document.querySelectorAll('.pagination__page');

const handleClick = e => {
  console.log(e.target.dataset.pageNumber);
};

buttons.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
