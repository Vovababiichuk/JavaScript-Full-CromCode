// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //! Статичні методти для класа, звичайні методи для екземпляра класа
//   static compare(user1, user2) {
//     return user1.age - user2.age;
//   }

//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }
// }

// class User2 extends User {
//   constructor(name, age, speed) {
//     super(name, age);
//     this.speed = speed;
//   }
//   start() {
//     console.log(`Start ${this.name}`);
//   }

//   stop() {
//     console.log(`Stop ${this.role}`);
//   }
//   showSpeed() {
//     console.log(`Speed - ${this.speed}`);
//   }
// }

// const user1 = new User2('Bob', 19, 120);
// console.log(user1);
// user1.sayHi();
// user1.showSpeed();

// const user2 = new User('Tom', 34);
// user2.sayHi();

// console.log(User.compare(user1, user2)); // -15

//! ===============Security============
//! ===============Security============
//! ===============Security============

class Wallet {
  // constructor() {
  //   this._balance = 0;
  // }

	#balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

	withdraw(amount) {
		if (amount > this.#balance) {
			console.log('No enough funds');
			return;
		}

		this.#balance -= amount;
	}
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance())
wallet1.deposit(55);
console.log(wallet1.getBalance())
wallet1.withdraw(100);
wallet1.withdraw(5);
wallet1.getBalance()
// console.log(wallet1.#balance) // Private field '#balance' must be declared in an enclosing class
