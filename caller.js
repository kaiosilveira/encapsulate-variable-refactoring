const { defaultOwner, setDefaultOwner } = require('./default-owner');

let spaceship = { name: 'Nebuchadnezzar' };

const owner = defaultOwner();
spaceship.owner = owner;

setDefaultOwner({ firstName: 'Gabriella', lastName: 'Caetano' });

// lots of spaghetti code

owner.firstName = 'Morpheus';
owner.lastName = '';

console.log(spaceship.owner);
