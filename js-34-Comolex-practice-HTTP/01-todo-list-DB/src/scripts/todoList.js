import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';


const onListClick = e => {
  if (e.target.classList.contains('list-item__checkbox')) {
    onToggleTask(e);
  } else if (e.target.classList.contains('list-item__delete-btn')) {
    onDeleteTask(e);
  }
};

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
};
