let defaultOwner = { firstName: 'Kaio', lastName: 'Silveira' };

function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}

module.exports = { getDefaultOwner, setDefaultOwner };
