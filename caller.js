(() => {
  'use strict';

  const { defaultOwner, setDefaultOwner } = require('./default-owner');

  let spaceship = { name: 'Nebuchadnezzar' };

  const owner = defaultOwner();
  spaceship.owner = owner;

  setDefaultOwner({ firstName: 'Gabriella', lastName: 'Caetano' });

  // lots of spaghetti code

  setDefaultOwner({ firstName: 'Morpheus', lastName: '' });

  console.log(spaceship.owner);
})();
