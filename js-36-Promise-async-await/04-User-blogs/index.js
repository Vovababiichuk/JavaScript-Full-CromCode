const baseUrl = 'https://api.github.com/users';

export const getUsersBlogs = async users => {
  try {
    const res = await Promise.all(users.map(user => fetch(`${baseUrl}/${user}`)));

    const userData = await Promise.all(res.map(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    }));

    return userData.map(user => user.blog);
  } catch (err) {
    console.error('Failed to get user data:', err.message);
    return null;
  }
};

// Examples
getUsersBlogs(['google', 'facebook', 'reactjs'])
  .then(linksList => console.log(linksList)) // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
  .catch(err => console.error(err));

getUsersBlogs(['microsoft'])
  .then(linksList => console.log(linksList)) // ==> ["https://opensource.microsoft.com"]
  .catch(err => console.error(err));
