// const text = 'message';

// const myMessage = 'The text is ${text.toUpperCase()}, \nAnd something else.';

// console.log(myMessage);

//! ==================================

// const text = 'message';

// const myMessage = `
// 	The text is ${text.toUpperCase()},
// 			And something else.
// `;

// console.log(myMessage);

//! ==================================

// const text = 'message';

// console.log(text[0]); // m
// console.log(text.length); // 7
// console.log(text[text.length - 1]); // e
// console.log(text.charAt(0)); // m

//! ==============String not change====================

// const text = 'message';
// text[2] = 'Q';
// console.log(text);

//! ====================concat()===================

// const text = 'message';
// const text2 = 'Sage';

// console.log(text.concat(text2));

//! ====================split()===================

// const text = 'message';

// console.log(text.split()); // ['message']
// console.log(text.split('')); // ['m', 'e', 's', 's', 'a', 'g', 'e']
// console.log(text.split('a')); // ['mess', 'ge']

//! ==============================================

// const text = 'Consectetur adipisicing elit.';
// const splitText = (text, len) => {
//   const strArr = [];
//   let startPosition = 0;

//   while (true) {
//     const chunk = text.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += len;
//   }

//   return strArr.join('\n');
// };

// console.log(splitText(text, 4));

//! ===================Sort()=====localCompare===========

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Bob',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Denis',
    phoneNumber: '444-44-44',
  },
];

const sortContacts = contacts => {
  const res = contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return res;
};

console.log(sortContacts(contacts));
