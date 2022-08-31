let defaultOwner = { firstName: 'Kaio', lastName: 'Silveira' };

function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}

let spaceship = { name: 'Nebuchadnezzar' };

spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: 'Morpheus', lastName: '' });

console.log(spaceship.owner);
