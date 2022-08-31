let defaultOwner = { firstName: 'Kaio', lastName: 'Silveira' };
let spaceship = { name: 'Nebuchadnezzar' };

spaceship.owner = defaultOwner;

defaultOwner.firstName = 'Morpheus';
defaultOwner.lastName = '';

console.log(spaceship.owner);
