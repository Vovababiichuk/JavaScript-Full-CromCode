const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
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

/*

### 1. Оголошення масиву задач

```javascript
const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];
```

Масив `tasks` містить задачі, кожна з яких є об'єктом з полями:
- `text`: текст задачі,
- `done`: статус виконання (логічне значення),
- `id`: унікальний ідентифікатор задачі.

### 2. Оголошення елемента списку

```javascript
const listElem = document.querySelector('.list');
```

Знаходить HTML-елемент з класом `list`, де будуть відображені всі задачі.

### 3. Функція для відображення задач

```javascript
const renderTasks = tasksList => {
  listElem.innerHTML = '';  // Очищує список перед додаванням нових елементів

  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)  // Сортує задачі так, щоб виконані були в кінці списку
    .map(({ text, done, id }) => {  // Створює HTML-елементи для кожної задачі
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      
      if (done) {
        listItemElem.classList.add('list__item_done');  // Додає клас для виконаних задач
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);  // Додає всі створені елементи в список
};
```

Ця функція очищає існуючий список, сортує задачі, створює HTML-елементи для кожної задачі та додає їх у список.

### 4. Виклик функції для початкового відображення задач

```javascript
renderTasks(tasks);
```

Викликає `renderTasks` для початкового відображення задач при завантаженні сторінки.

### 5. Функція для зміни статусу задачі

```javascript
const onToggleTask = e => {
  const isCheckbox = e.target.matches('.list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  taskData.done = e.target.checked;
  renderTasks(tasks);
};
```

Ця функція спрацьовує при кліку на чекбокс. Якщо клікнув на чекбокс, знаходить відповідну задачу за `id` і змінює її статус виконання (`done`). Після цього заново відображає задачі.

### 6. Додавання обробника події для зміни статусу задачі

```javascript
listElem.addEventListener('click', onToggleTask);
```

Додає обробник події кліку для елемента `listElem`, який викликає `onToggleTask`.

### 7. Функція для створення нової задачі

```javascript
const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;  // Не додає пусті задачі
  }
  taskTitleInputElem.value = '';  // Очищує поле вводу

  tasks.push({
    text,
    done: false,
    id: Math.random().toString(),  // Створює унікальний ідентифікатор для нової задачі
  });
  renderTasks(tasks);  // Заново відображає задачі
};
```

Ця функція створює нову задачу, додає її до масиву `tasks` і заново відображає задачі.

### 8. Додавання обробника події для створення задачі

```javascript
const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);
```

Додає обробник події кліку для кнопки створення задачі, який викликає `onCreateTask`.

---

Усі частини коду працюють разом для відображення списку задач, дозволяючи додавати нові задачі та змінювати статус виконання існуючих задач.


*/
