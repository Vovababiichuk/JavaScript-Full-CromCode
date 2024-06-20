// const createMessenger = () => {
//   const state = {
//     message: 'Just learn it',
//     sender: 'Gromcode',
//   };

//   return {
//     setMessage: message => {
//       state.message = message;
//     },
//     setSender: sender => {
//       state.sender = sender;
//     },
//     sendMessage: name => {
//       return `Hello, ${name}! ${state.message}! This message was sent by ${state.sender}`;
//     },
//   };
// };

// // export default createMessenger;

// // examples
// const messanger1 = createMessenger();
// console.log(messanger1.sendMessage('Anna')); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

// const messanger2 = createMessenger();
// messanger2.setMessage('You are learning JS and you do it well');
// console.log(messanger2.sendMessage('Michael')); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

// const messanger3 = createMessenger();
// messanger3.setMessage('The weather is amazing today');
// messanger3.setSender('Anna');
// console.log(messanger3.sendMessage('Alex')); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna

//! ==========================================================================

const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromecode';

  function sendMessage(name) {
    console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
  }

  function setMessage(newMessage) {
    message = newMessage;
  }

  function setSender(newSender) {
    sender = newSender;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

// export default createMessenger;

// examples
const messanger1 = createMessenger();
console.log(messanger1.sendMessage('Anna')); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

const messanger2 = createMessenger();
messanger2.setMessage('You are learning JS and you do it well');
console.log(messanger2.sendMessage('Michael')); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

const messanger3 = createMessenger();
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
console.log(messanger3.sendMessage('Alex')); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
