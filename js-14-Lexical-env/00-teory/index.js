// senMessage
'use strict';

// let message = 'Just learn it!';
// message =1 'Just learn it!';

//! При кожному виконанні ф-ї створюється її лексичне оточення!
//! Ссилка на зовнішні лексичні оточення задається із того місця де вона була створена

//! It's function expression
// const sendMessage = name => {
//   const sender = 'Gromecode';
//   console.log(`${name}, ${message}. You ${sender}`);
// };

// sendMessage('Tom');

//! ===============================================
// sendMessage('Tom');

//! It's function declaration
// function sendMessage(name) {
//   const sender = 'Gromecode';
//   console.log(`${name}, ${message}. You ${sender}`);
// }

// function setMessage(text) {
//   message = text;
// }

// sendMessage('Tom');

// setMessage('Hello!');

// sendMessage('Tom');

// message = 'Hi!';

// sendMessage('Tom');

//! ===========================================================

let message = 'Just learn it!';

const createMessenger = () => {
  function sendMessage(name) {
    const sender = 'Gromecode';
    console.log(`${name}, ${message}. You ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  return {
    //! sendMessage: sendMessage - у обьекта якщо назва властивості і перемінної якій ми дану властивість призначаєм то можна коротко записати - sendMessage!!!!!
    sendMessage,
    setMessage,
  };
};

// В даній ф-ї (messenger) буде те що повертає createMessenger і це буде обьект:
// return {
//   sendMessage,
//   setMessage,
// };
const messenger1 = createMessenger();

messenger1.sendMessage('Bob...');

const messenger2 = createMessenger();

messenger2.sendMessage('Tom...');

messenger2.setMessage('Hello!');

messenger1.sendMessage('Ann...');
