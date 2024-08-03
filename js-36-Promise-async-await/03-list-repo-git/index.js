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

const fetchUserRepos = async repoUrl => {
  try {
    const res = await fetch(repoUrl);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const repos = await res.json();

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
  } catch (err) {
    console.error(err.message);
    alert('Failed to load data');
  } finally {
    spinnerElem.classList.add('spinner_hidden');
  }
};

const fetchUserData = async () => {
  const userName = inputFormElem.value.trim();

  if (!userName) {
    alert('Enter user name');
    nameUserElem.textContent = '';
    locationUserElem.textContent = '';
    spinnerElem.classList.add('spinner_hidden');
    return;
  }

  try {
    const res = await fetch(`${baseUrl}/${userName}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const user = await res.json();
    const { avatar_url: avatar, name, location, repos_url: repoUrl } = user;
    nameUserElem.textContent = name || 'unknown';
    locationUserElem.textContent = `from ${location}` || 'unknown';
    avatarElem.src = avatar || defaultAvatarUrl;

    await fetchUserRepos(repoUrl);
  } catch (err) {
    console.error(err.message);
    alert('Failed to load data');
  } finally {
    spinnerElem.classList.add('spinner_hidden');
  }
};

const handleUserDataRequest = () => {
  displayLoadingState();
  fetchUserData();
};

showBtnElem.addEventListener('click', handleUserDataRequest);
