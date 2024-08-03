export const getUsersBlogs = users => {
  return new Promise((resolve, reject) => {
    if (users.length === 0) {
      resolve([]);
    } else {
      const linksList = users.map(user => `https://opensource.${user}.org`);
      resolve(linksList);
    }
  });
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
