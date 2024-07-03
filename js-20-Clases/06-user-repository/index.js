// пример работы getters / setters у классов и объектов


// class Dog {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(name) {
//     this._name = name;
//   }
// }

// const myDog = new Dog('Rex');
// console.log(myDog.name); // ===> 'Rex'
// myDog.name = 'Buddy'; // ===> если бы не было setter, то имя бы не поменялось
// console.log(myDog.name); // ===> 'Buddy'

/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this.id = id;
    this.name = name;
    this.sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(user => user.name);
  }

  getUserIds() {
    return this._users.map(user => user.id);
  }

  getUserNameById(id) {
    const user = this._users.find(user => user.id === id);
    return user ? user.name : 'User not found';
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
