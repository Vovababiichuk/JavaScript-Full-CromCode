export const requestUserData = userId => {
  const pr = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: 'userid777',
          email: 'userid777@example.com',
        })
      }, 1000)
    }
  });

  return pr;
};

requestUserData().then(data => console.log(data));
requestUserData('broken').catch(err => console.log(err));