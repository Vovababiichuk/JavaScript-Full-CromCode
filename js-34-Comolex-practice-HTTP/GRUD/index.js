const baseUrl = 'https://66ab4981636a4840d7ca0299.mockapi.io/api/v1/users';

export function getUsersList() {
  return fetch(baseUrl)
    .then(res => {
      if (!res.ok) {
        return new Error(`Network response was not ok ${res.statusText}`);
      }
      return res.json();
    })
    .catch(err => {
      console.error('There was an error with fetching users', err);
    })
		// .then(users => console.log(users));
}

getUsersList().then(users => console.log(users));


export function getUserById(userId) {
	return fetch(`${baseUrl}/${userId}`)
		.then(res => res.json())
		.catch(err => console.error(err))
		.then(user => console.log(user));
}


export function createUser(userData) {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(userData)
	})
		.then(res => res.json())
		.catch(err => console.error(err))
		.then(user => console.log(user));
}



export function deleteUser(userId) {
	return fetch(`${baseUrl}/${userId}`, {
		method: 'DELETE',
	})
	.catch(err => console.error(err))
	.then(() => console.log(`User deleted with id ${userId}`));
}


export function updateUser(userId, userData) {
	const url = `${baseUrl}/${userId}`
	return fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(userData)
	})
	.then(res => {
		if (!res.ok) {
			return new Error(`Network response was not ok ${res.statusText}`);
		}
		return res.json();
	})
	.catch(err => console.error('There was an error with updating user', err))
}
// // examples
// getUsersList().then(users => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });
