export const requestUserData = (userId, callback) => {
  const randomDelay = Math.random() * 1000;

  setTimeout(() => {
    if (userId === 'broken') {
      callback(userId, 'Failed to load user data');
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
    return console.log(error);
  }
  return console.log(data);
};

requestUserData('1', onUserDataLoaded); // Should return { userId: '1', email: '1@example.com' }
requestUserData('broken', onUserDataLoaded); // Should return 'Failed to load user data'
