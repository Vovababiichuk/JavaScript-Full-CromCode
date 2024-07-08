const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  tasksList
    .sort((a, b) => b.done - a.done)
    .forEach(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');

      listItemElem.append(checkbox, text);
      listElem.prepend(listItemElem);

      listItemElem.classList.toggle('list__item_done', done);
    });
};

renderTasks(tasks);

// put your code here

const inputTask = document.querySelector('.task-input');
const btnCreateTask = document.querySelector('.create-task-btn');

const handleCreateTask = () => {
  const taskText = inputTask.value.trim();
  if (taskText) {
    const newTask = {
      id: `task${tasks.length + 1}`,
      text: taskText,
      done: false,
    };
    tasks.push(newTask);
    renderTasks(tasks);
    inputTask.value = '';
  }
};

btnCreateTask.addEventListener('click', handleCreateTask);

inputTask.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    handleCreateTask();
  }
});

// v1

// const handleChangeTaskStatus = e => {
//   // В обробнику подій перевіряється, чи елемент, який спричинив подію (e.target), відповідає селектору .list__item-checkbox.
//   if (e.target.matches('.list__item-checkbox')) {
//     const checkboxLink = e.target;
//     const listItem = checkboxLink.closest('.list__item');

//     if (checkboxLink.checked) {
//       listItem.classList.add('list__item_done');
//     } else {
//       listItem.classList.remove('list__item_done');
//     }
//   }
// };

// v2

const handleChangeTaskStatus = e => {
  if (e.target.classList.contains('list__item-checkbox')) {
    const taskId = e.target.dataset.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].done = !tasks[taskIndex].done;
      renderTasks(tasks);
    }
  }
};

listElem.addEventListener('change', handleChangeTaskStatus);
