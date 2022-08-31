const { getDefaultOwner, setDefaultOwner } = require('./default-owner');

describe('defaultOwner', () => {
  describe('getDefaultOwner', () => {
    it('should return the default owner', () => {
      const owner = getDefaultOwner();
      expect(owner.firstName).toEqual('Kaio');
      expect(owner.lastName).toEqual('Silveira');
    });
  });

  describe('setDefaultOwner', () => {
    it('should change the default owner', () => {
      setDefaultOwner({ firstName: 'Enzo', lastName: 'Silveira' });

      const owner = getDefaultOwner();
      expect(owner.firstName).toEqual('Enzo');
      expect(owner.lastName).toEqual('Silveira');
    });
  });
});
