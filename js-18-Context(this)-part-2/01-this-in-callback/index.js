const party = {
  message: 'Welvome to the party',
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Bob', age: 16, email: 'example@server.com' },
    { name: 'Don', age: 30, email: 'example@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email: `${email}`,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(party.getInvitations());
