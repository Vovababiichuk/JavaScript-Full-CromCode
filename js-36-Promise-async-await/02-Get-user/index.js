export const fetchUser = async userId => {
  try {
    if (!userId) {
      return null;
    }
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to get user data');
    }

    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to fetch user', err);
  }
};

fetchUser('facebook')
  .then(userData => console.log(userData))
  .catch(err => console.error(err.message));
