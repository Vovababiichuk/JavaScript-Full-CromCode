class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    return (this.#balance += amount);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`No enough funds`);
			return;
    }
    return (this.#balance -= amount);
  }
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance());
wallet1.deposit(50);
console.log(wallet1.getBalance());
wallet1.withdraw(100);
console.log(wallet1.getBalance());
