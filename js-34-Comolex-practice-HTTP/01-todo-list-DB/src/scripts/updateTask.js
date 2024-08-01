import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask } from './tasksGateway.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) return;

  // 1. Prepare data
  const taskId = e.target.dataset.id;
  if (!taskId) {
    console.error('Task id is undefined');
    return;
  }

  const tasksList = getItem('tasksList');
  const task = tasksList.find(task => task.id === taskId);

  if (!task) {
    console.error(`Task with id ${taskId} not found`);
    return;
  }

  const { text, createDate } = task;
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    })
    .catch(error => {
      console.error('Failed to update task:', error);
    });
};



// 1. Prepare data
// 2. Update data in DB
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
