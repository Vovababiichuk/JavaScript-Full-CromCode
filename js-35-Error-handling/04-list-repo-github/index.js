// v1
// v1
// v1

// const defaultAvatarUrl = 'https://avatars3.githubusercontent.com/u10001';
// const baseUrl = 'https://api.github.com/users';

// const avatarElem = document.querySelector('.user__avatar');
// const showBtnElem = document.querySelector('.name-form__btn');
// const inputFormElem = document.querySelector('.name-form__input');
// const nameUserElem = document.querySelector('.user__name');
// const locationUserElem = document.querySelector('.user__location');
// const repoListElem = document.querySelector('.repo-list');

// avatarElem.src = defaultAvatarUrl;

// const handleUserDataRequest = () => {
// 	nameUserElem.textContent = 'Loading...';
// 	locationUserElem.textContent = 'Loading...';
// 	repoListElem.innerHTML = '<li>Loading...</li>';

//   const userName = inputFormElem.value.trim();

//   if (!userName) {
//     return alert('Enter user name');
//   }

//   return fetch(`${baseUrl}/${userName}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then(user => {
//       const { avatar_url: avatar, name, location, repos_url: repoUrl } = user;
//       nameUserElem.textContent = name || 'unknown';
//       locationUserElem.textContent = location || 'unknown';
//       avatarElem.src = avatar || defaultAvatarUrl;

//       return fetch(repoUrl)
// 			.then(res => {
//           if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//           }
//           return res.json();
//         })
//         .then(repos => {
//           repoListElem.innerHTML = '';

//           repos.map(({ name }) => {
//             const repoListItemElem = document.createElement('li');
//             repoListItemElem.classList.add('repo-list__item');
//             repoListItemElem.textContent = name;

//             return repoListElem.append(repoListItemElem);
//           });
//         })
//         .catch(err => {
//           console.error(err.message);
//           nameUserElem.textContent = 'Error';
//           locationUserElem.textContent = 'Error';
//           repoListElem.innerHTML = `<li>${err.message}</li>`;
//         });
//     })
//     .catch(err => console.log(err.message));
// };

// showBtnElem.addEventListener('click', handleUserDataRequest);

// v2
// v2
// v2

const defaultAvatarUrl = 'https://avatars3.githubusercontent.com/u10001';
const baseUrl = 'https://api.github.com/users';

const avatarElem = document.querySelector('.user__avatar');
const showBtnElem = document.querySelector('.name-form__btn');
const inputFormElem = document.querySelector('.name-form__input');
const nameUserElem = document.querySelector('.user__name');
const locationUserElem = document.querySelector('.user__location');
const repoListElem = document.querySelector('.repo-list');
const spinnerElem = document.querySelector('.spinner');

avatarElem.src = defaultAvatarUrl;

const displayLoadingState = () => {
  nameUserElem.textContent = 'Loading...';
  locationUserElem.textContent = 'Loading...';
  spinnerElem.classList.remove('spinner_hidden');
};

const fetchUserRepos = repoUrl => {
  return fetch(repoUrl)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(repos => {
      repoListElem.innerHTML = '';

			if (repos && Array.isArray(repos)) {
        repos.forEach(({ name }) => {
          const repoListItemElem = document.createElement('li');
          repoListItemElem.classList.add('repo-list__item');
          repoListItemElem.textContent = name;
          repoListElem.append(repoListItemElem);
        });
      } else {
        repoListElem.innerHTML = '<li>No repositories found</li>';
      }
    })
    .catch(err => {
      console.error(err.message);
      alert('Failed to load data');
    })
    .finally(() => {
      spinnerElem.classList.add('spinner_hidden');
    });
};

const fetchUserData = () => {
  const userName = inputFormElem.value.trim();

  if (!userName) {
    alert('Enter user name');
    nameUserElem.textContent = '';
    locationUserElem.textContent = '';
    spinnerElem.classList.add('spinner_hidden');
		return Promise.resolve();
  }

  return fetch(`${baseUrl}/${userName}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(user => {
      console.log(user);
      const { avatar_url: avatar, name, location, repos_url: repoUrl } = user;
      nameUserElem.textContent = name || 'unknown';
      locationUserElem.textContent = `from ${location}` || 'unknown';
      avatarElem.src = avatar || defaultAvatarUrl;

      return fetchUserRepos(repoUrl);
    })
    .catch(err => {
      console.error(err.message);
      alert('Failed to load data');
    })
		.finally(() => {
			spinnerElem.classList.add('spinner_hidden');
		});
};

const handleUserDataRequest = () => {
  displayLoadingState();
  fetchUserData();
};

showBtnElem.addEventListener('click', handleUserDataRequest);
