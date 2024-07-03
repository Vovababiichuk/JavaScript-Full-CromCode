class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    if (age < 0) {
      return false;
    }

    this.age = age;
    if (this.age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    return age;
  }
}

const user1 = new User('Bob', 19);
user1.sayHi(); // "Hi, I am Bob"
user1.requestNewPhoto(); // "New photo request was sent for Bob"
console.log(user1.setAge(30)); // "New photo request was sent for Bob", 30

const emptyUser = User.createEmpty();
console.log(emptyUser); // User { name: '', age: null }
emptyUser.sayHi(); // "Hi, I am "
