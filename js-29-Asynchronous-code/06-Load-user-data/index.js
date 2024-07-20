const requestUserData = (userId, callback) => {
  const randomDelay = 1000 + Math.random() * 2000;

  setTimeout(() => {
    if (userId === 'broken') {
      callback('Failed to load user data', null);
    } else {
      callback(null, {
        userId,
        email: `${userId}@example.com`,
      });
    }
  }, randomDelay);
};

const onUserDataLoaded = (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
};

requestUserData('1', onUserDataLoaded);
requestUserData('broken', onUserDataLoaded);