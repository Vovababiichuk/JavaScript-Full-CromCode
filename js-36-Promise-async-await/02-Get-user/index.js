export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${uerId}`);
    if (!response.ok) {
      return null;
    }

    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

fetchUser('facebook');
