const user = {
  firstName: '',
  lastName: '',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

// Встановлюємо нове повне ім'я
user.setFullName('John Doe');

// Викликаємо метод "getFullName" для отримання оновленого повного імені
const updatedFullName = user.getFullName();
console.log(updatedFullName); // Виведе "John Doe"
