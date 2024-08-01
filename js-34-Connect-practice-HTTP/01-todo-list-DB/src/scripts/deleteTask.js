import { getTasksList, deleteTask } from './tasksGateway.js';
import { getItem, setItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const onDeleteTask = e => {
  // Перевірка, чи натиснуто саме на кнопку видалення
  if (!e.target.classList.contains('list-item__delete-btn')) return;

  // Отримання ID завдання
  const taskId = e.target.closest('.list-item').querySelector('.list-item__checkbox').dataset.id;

  // Видалення завдання з сервера
  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      // Оновлення даних у локальному сховищі
      setItem('tasksList', newTasksList);
      // Оновлення інтерфейсу користувача
      renderTasks();
    })
    .catch(error => {
      console.error('Failed to delete task:', error);
    });
};
