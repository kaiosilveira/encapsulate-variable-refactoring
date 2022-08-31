class Person {
  constructor(data) {
    this._firstName = data.firstName;
    this._lastName = data.lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
}

module.exports = Person;
