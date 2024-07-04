export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  const list = document.querySelector('.list');

  const listItemsElements = tasksList.map(({ text, done }) => {
    const listItemElement = document.createElement('li');
    const inputCheckBox = document.createElement('input');

    listItemElement.classList.add('list__item');
		if (done) {
			listItemElement.classList.add('list__item_done')
		}
    inputCheckBox.classList.add('list__item-checkbox');

    inputCheckBox.setAttribute('type', 'checkbox');
		inputCheckBox.checked = done;

    listItemElement.append(inputCheckBox, text);

    return listItemElement;
  });

  list.append(...listItemsElements);
};

renderTasks(tasks);
