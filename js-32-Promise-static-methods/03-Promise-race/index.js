const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = ['https://server.com/us/userId', 'https://server.com/eu/userId', 'https://server.com/au/userId'];

export const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}/users/${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-1').then(res => console.log(res));