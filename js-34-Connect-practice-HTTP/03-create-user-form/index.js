const baseUrl = 'https://66ab4981636a4840d7ca0299.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const checkFormValidity = () => {
  buttonElem.disabled = !formElem.reportValidity();
};

const handleResponse = res => {
  if (!res.ok) {
    throw new Error(`Failed to create user: ${res.statusText}`);
  }
  return res.json();
};

const handleSuccess = user => {
  alert(JSON.stringify(user));
  formElem.reset();
  buttonElem.disabled = true;
};

const handleError = err => {
  console.error('Error creating user', err);
};

const onFormSubmit = e => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(handleResponse)
    .then(handleSuccess)
    .catch(handleError);
};

formElem.addEventListener('input', checkFormValidity);
formElem.addEventListener('submit', onFormSubmit);
