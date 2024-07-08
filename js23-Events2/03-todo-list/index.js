const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  tasksList
    .sort((a, b) => a.done - b.done)
    .forEach(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');

      listItemElem.append(checkbox, text);
      listElem.appendChild(listItemElem);

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
    tasks.unshift(newTask);
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
