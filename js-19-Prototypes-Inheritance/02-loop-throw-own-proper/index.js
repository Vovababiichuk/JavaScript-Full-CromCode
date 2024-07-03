// v1

function getOwnProps(obj) {
  const ownProps = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      ownProps.push(prop);
    }
  }
  return ownProps;
}

// v2

// function getOwnProps(obj) {
//   return Object.keys(obj);
// }

const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
};

Object.setPrototypeOf(ship, vehicle);

console.log(getOwnProps(vehicle));
