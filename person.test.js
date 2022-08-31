const Person = require('./person');

describe('Person', () => {
  it('should have a first name and a last name based on the data provided', () => {
    const person = new Person({ firstName: 'Kaio', lastName: 'Silveira' });
    expect(person.firstName).toEqual('Kaio');
    expect(person.lastName).toEqual('Silveira');
  });
});
