//! ==================СИНXРОННЫЕ ОШИБКИ===================

// const jsonString = '{"name": "John", "age": 30';
// const userData = JSON.parse(jsonString);
// console.log(userData);

// =========================================

// try {
// 	const jsonString = '{"name": "John", "age": 30';
// 	const userData = JSON.parse(jsonString);
// 	console.log(userData);
// } catch (err) {
// 	console.error(err.name);
// }

// console.log('Code continue even after error....');

// =========================================

// try {
// 	const jsonString = '{"name": "John", "age": 30}';
// 	const userData = JSON.parse(jsonString);
// 	console.log(userData);
// } catch (err) {
// 	console.error(err.name);
// } finally {
// 	console.log('Some actions');
// }

// =========================================

// window.addEventListener('error', function onUnhandError(e) {
// 	console.log(e);
// })

// try {
//   const jsonString = '{"name": "John", "age": 30';
// 	throw new ReferenceError();
//   const userData = JSON.parse(jsonString);
//   console.log(userData);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.error('Handled');
//   } else {
// 		throw err;
// 	}
// } finally {
//   console.log('Some actions');
// }

//! ==================АСИНXРОННЫЕ ОШИБКИ===================

// fetch('https://example.com')

// ===========================================

// const successRequest = Promise.resolve({ name: 'Tom' });
// successRequest
// 	.then(data => {
// 		console.log(data);
// 		throw new Error('Unexpected error');
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	})

// ===========================================

// const failedRequest = Promise.reject(new Error('Fail'));

// failedRequest
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//     // return Promise.reject(err);
//     // throw err;
//     // под капотом
//     // return Promise.reject(err);
//   })
//   .then(data => {
//     console.log(data); // undefined
//   });

// window.addEventListener('unhandledrejection', function(e) {
//   // console.log(e);
//   console.log(e.reason.message);
// });

//! ==================GitHub API=================================

// fetch('https://api.github.com/users/github')
// 	.then(res => {
// 		return res.json();
// 	})
// 	.then(data => console.log(data));

// =======================Error========================

// fetch('https://api.github.com/users/github')
fetch('https://api.github.com/usrs/github')
  .then(res => {
    // debugger;
    if (res.status === 200) {
      return res.json();
    }
    throw new Error('No data');
  })
  .then(data => console.log(data))
  .catch(err => {
    // debugger;
    console.log(err);
  });
