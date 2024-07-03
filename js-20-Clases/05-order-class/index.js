class Order {
  // put your code here
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.id = this.generateOrderId();
    this.dateCreated = new Date();
  }

  generateOrderId() {
    return Date.now().toString();
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}
