import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  if (a.done !== b.done) {
    return a.done ? 1 : -1;
  }
  return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.type = 'checkbox';
  checkboxElem.dataset.id = id;
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const checkboxElem = createCheckbox({ done, id });
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';

  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
