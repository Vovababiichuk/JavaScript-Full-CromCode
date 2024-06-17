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

const sortContacts = (contacts, isAsc = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  const res = contacts.sort((a, b) => {
    return isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });
  return res;
};

console.log(sortContacts(contacts, false));
