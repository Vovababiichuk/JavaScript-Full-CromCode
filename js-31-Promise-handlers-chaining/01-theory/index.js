//! Звернення до сервера це завжди АСИНXРОННА операція

const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('No user id provided'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 18,
          email: `${userId}@example.com`,
          userId,
        });
      }, 1000);
    }
  });

  return request;
};

// requestUserData('user-1')
requestUserData('broken')
  //! Chaining цепочка обробників
  //! ПОРЯДОК ПІДПИСОК ВАЖЛИВИЙ!!! Кожен підпищик отримує дані з попереднього підпищика...
  // .then(data => console.log(data), err => console.log(err))
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'));

//! Перевага ПРОМІСІВ ПЕРЕД КОЛБЕКАМИ що ми можемо підписуватися декілька разів в декількох місцях програми...

// requestUserData('broken-1')
// .then(data => console.log(data))
