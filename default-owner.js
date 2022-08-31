const Person = require('./person');

let defaultOwnerData = new Person({ firstName: 'Kaio', lastName: 'Silveira' });

function defaultOwner() {
  return new Person(defaultOwnerData);
}

function setDefaultOwner(arg) {
  defaultOwnerData = new Person(arg);
}

module.exports = { defaultOwner, setDefaultOwner };
