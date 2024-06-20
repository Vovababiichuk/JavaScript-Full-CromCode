let message = 'Just learn it';
const sender = 'Gromcode';

const sendMessage = name => {
  console.log(`${name}, ${message}! Your ${sender}`);
};

sendMessage('Ann');

const setMessage = newMessage => {
  message = newMessage;
};

setMessage('Good job');

sendMessage('Ann');
