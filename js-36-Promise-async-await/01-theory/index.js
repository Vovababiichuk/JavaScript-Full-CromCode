// function fun() {
//   return 1;
// }

// const res = fun();

//! ===========async============

// за допомогою async ми робимо ф-ю асинхронною
// async завертає результат виконання ф-ю в ПРОМІС

// async function fun() {
//   return 1;
// }

// const res = fun();
// console.log(res); // Promise{<fulfilled>: 1}

// res.then(data => console.log(data)); // 1

//! ===========await============

// await - чекає поки виконається проміс

// async function fun() {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(17);
//     }, 2000);
//   });

//   // await - закине в res не ПРОМІС а результат виконання промісу
//   const res = await promise;
//   console.log(res);
//   console.log('Hello');
//   return res;
// }

// fun();
// console.log('Test');

//! =======================

// const getUser = async userId => {
//   const response = await fetch(`https://api.github.com/users/${userId}`)
//   if (!response.ok) {
//     return null;
//   }
//   // await - чекає поки ПРОМІС виконається і кладе в userData значення яке зарезолвить ПРОМІС
//   const userData = await response.json();

//   return userData;
// }

// getUser('facebook');

//! ============================

const getUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to fetch user', err);
  }
};

getUser('facebook')
  .then(userData => console.log(userData))
  .catch(err => alert(err.message));
