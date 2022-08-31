const { getDefaultOwner, setDefaultOwner } = require('./default-owner');

let spaceship = { name: 'Nebuchadnezzar' };

spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: 'Morpheus', lastName: '' });

console.log(spaceship.owner);
