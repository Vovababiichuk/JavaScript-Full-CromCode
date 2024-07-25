// const btnShow = document.querySelector('.name-form__btn');
// const userNameInput = document.querySelector('.name-form__input');
// const userNameSpan = document.querySelector('.user__name');
// const userLocationSpan = document.querySelector('.user__location');
// const userAvatar = document.querySelector('.user__avatar')

// const defaultAvatar = 'https://ui-avatars.com/api/?name=User&background=random&color=fff';
// userAvatar.src = defaultAvatar;

// const checkInput = (input) => {
//   const userName = input.value.trim();
//   if (userName === '') {
//     alert('ERROR, empty field! Enter User Name!');
//     return null;
//   }
//   input.value = '';
//   return userName;
// }

// const fetchUserData = (userName) => {
//   return fetch(`https://api.github.com/users/${userName}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`User not found: ${res.status}`);
//       }
//       return res.json();
//     });
// }

// const updateUserInfo = ({ avatar_url, name, location }) => {
//   userAvatar.src = avatar_url || defaultAvatar;
//   userNameSpan.textContent = name || 'Name is not available';
//   userLocationSpan.textContent = location || 'Location not available';
// }

// const handleError = (error) => {
//   console.error('Error:', error);
//   userAvatar.src = defaultAvatar;
//   userNameSpan.textContent = 'User not found';
//   userLocationSpan.textContent = '';
// }

// const handleDataUser = () => {
// 	const userName = checkInput(userNameInput);
// 	if (!userName) return;

// 	fetchUserData(userName)
// 		.then(updateUserInfo)
// 		.catch(handleError)
// }

// btnShow.addEventListener('click', handleDataUser);

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
  .then((response) => response.json());
  // .then((response) => response.text());
};

const renderUserData = (userData) => {
  console.log(userData);
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location 
  ? `from ${location}`
    : '';
  };
  
  const showUserBtnElem = document.querySelector('.name-form__btn');
  const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);