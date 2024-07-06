const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const errorEmail = document.querySelector('.error-text_email');
const errorPassword = document.querySelector('.error-text_password');

const isRequired = value => (value ? undefined : 'Required');
const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

const handleInputChange =
  (errorElement, validators) =>
  ({ target: { value } }) => {
    const errorMessage = validators
      .map(validator => validator(value))
      .find(message => message !== undefined);
    const errorDisplayElement = errorElement;
    errorDisplayElement.textContent = errorMessage || '';
  };

const emailValidators = [isRequired, isEmail];
const passwordValidators = [isRequired];

inputEmail.addEventListener('input', handleInputChange(errorEmail, emailValidators));
inputPassword.addEventListener('input', handleInputChange(errorPassword, passwordValidators));

const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = [...new FormData(form)].reduce((acc, [key, value]) => ({...acc, [key]: value}), {})
    alert(JSON.stringify(formData));
}

form.addEventListener('submit', handleFormSubmit)