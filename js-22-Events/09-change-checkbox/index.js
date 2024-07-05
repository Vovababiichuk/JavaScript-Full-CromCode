const checkBox = document.querySelector('.task-status');

const handleClick = (e) => {
  console.log(e.target.checked);
}

checkBox.addEventListener('click', handleClick)