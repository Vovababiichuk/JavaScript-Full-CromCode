const baseUrl = 'https://66a9f16d613eced4eba6ea76.mockapi.io/api/v1/tasks';

const mapTasks = tasks =>
		// tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }))
		tasks.map(task => ({ ...task }))

export const getTasksList = () => {
  return fetch(baseUrl)
    .then(res => res.json())
    .then(tasks => {
      console.log(tasks);
      return mapTasks(tasks);
    });
};

export const createTask = taskData => {
	return fetch(baseUrl, {
		method: 'POST',
		// В headers кажемо які дані ми запишем на сервер
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		// Тіло запроса - дані які ми будемо відправляти
		// Дані по сети ходять в виді строк, тому нам потрібно наш обьект привести до json строки (JSON.stringify)
		body: JSON.stringify(taskData)
	})
}

export const updateTask = (taskId, updatedTaskData) => {
	return fetch(`${baseUrl}/${taskId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(updatedTaskData)
	})
}

export const deleteTask = (taskId) => {
	return fetch(`${baseUrl}/${taskId}`, {
		method: 'DELETE',
	})
}