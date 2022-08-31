let defaultOwnerData = { firstName: 'Kaio', lastName: 'Silveira' };

function defaultOwner() {
  return defaultOwnerData;
}

function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

module.exports = { defaultOwner, setDefaultOwner };
