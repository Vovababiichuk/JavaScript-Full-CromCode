const baseUrl = 'https://66ab4981636a4840d7ca0299.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const checkFormValidity = () => {
  buttonElem.disabled = !formElem.reportValidity();
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
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(user => {
      alert(JSON.stringify(user));
      formElem.reset();
      buttonElem.disabled = true;
    })
    .catch(err => {
      console.error('Error creating user', err);
    });
};

formElem.addEventListener('input', checkFormValidity);
formElem.addEventListener('submit', onFormSubmit);
