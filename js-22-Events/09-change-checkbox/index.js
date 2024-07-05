const checkBox = document.querySelector('.task-status');

const handleChange = (event) => {
  console.log(event.target.checked);
}

checkBox.addEventListener('change', handleChange)