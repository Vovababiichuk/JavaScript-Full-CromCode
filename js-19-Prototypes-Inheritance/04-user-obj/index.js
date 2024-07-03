const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.fullName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
