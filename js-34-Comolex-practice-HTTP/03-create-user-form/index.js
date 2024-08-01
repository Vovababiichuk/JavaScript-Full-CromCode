const baseUrl = 'https://66ab4981636a4840d7ca0299.mockapi.io/api/v1/users'

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const checkFormValidity = () => {
  buttonElem.disabled = !formElem.reportValidity();
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));

  formElem.reset();
  buttonElem.disabled = true;

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`Failed to create user: ${res.statusText}`);
    }
    return res.json();
  })
  .then(user => console.log('User created', user))
  .catch(err => console.error('Error creating user', err));
}

formElem.addEventListener('input', checkFormValidity);
buttonElem.addEventListener('click', onFormSubmit);