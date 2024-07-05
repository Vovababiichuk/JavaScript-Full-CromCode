export const finishForm = () => {
  const form = document.querySelector('.login-form');
  const inputLogin = document.createElement('input');
  const inputPassword = document.querySelector('[name="password"]');
  inputPassword.setAttribute('type', 'password');
  inputLogin.setAttribute('type', 'text');
  inputLogin.setAttribute('name', 'login');
  form.prepend(inputLogin)

  console.log(form);
}
