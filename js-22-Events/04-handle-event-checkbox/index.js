const checkbox = document.querySelector('.task-status');

const handleChange = e => {
  console.log(e.target.checked);
};

checkbox.addEventListener('change', handleChange);
