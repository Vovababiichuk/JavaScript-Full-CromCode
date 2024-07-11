const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4', completedDate: new Date('2024-07-09') },
  { text: 'Buy meat', done: true, id: '5', completedDate: new Date('2024-07-08') },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  // Сортуємо задачі: спочатку невиконані, потім виконані (новіше вгорі за датою виконання)
  const sortedTasks = tasksList.slice().sort((a, b) => {
    if (a.done && !b.done) return 1; // якщо a виконана, а b - ні, то a має бути пізніше в списку
    if (!a.done && b.done) return -1; // якщо b виконана, а a - ні, то a має бути раніше в списку
    if (a.done && b.done) {
      // якщо обидві виконані, сортуємо за датою виконання (новіше вгорі)
      return b.completedDate.getTime() - a.completedDate.getTime();
    }
    return 0; // якщо обидві або ні одна з них не виконана, порівняння залишається без змін
  });

  const tasksElems = sortedTasks.map(({ text, done, id }) => {
    debugger;
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-id', id);
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');

    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkbox, text);

    return listItemElem;
  });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const onToggleTask = e => {
  const isCheckbox = e.target.matches('.list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  taskData.done = e.target.checked;
  if (taskData.done) {
    taskData.completedDate = new Date();
  } else {
    delete taskData.completedDate;
  }
  renderTasks(tasks);
};

listElem.addEventListener('click', onToggleTask);

const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  tasks.unshift({
    text,
    done: false,
    id: Math.random().toString(),
  });
  renderTasks(tasks);
};

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);
