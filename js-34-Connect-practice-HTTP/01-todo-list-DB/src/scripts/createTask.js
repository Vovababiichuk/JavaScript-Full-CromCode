import { renderTasks } from './renderer.js';
import { createTask, getTasksList } from './tasksGateway.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  // 1. Prepare data
  const newTask = {
    text,
    done: false,
    // createDate: new Date().toISOString(),
  };

  // 2. Write data to DB
  createTask(newTask)
    // 3. Read new data from server
    .then(() => getTasksList())
    // 4. Save new data to front-end storage
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      // 5. Update UI based on new data
      renderTasks();
    });
};

// 1. Prepare data
// 2. Write data to DB
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
