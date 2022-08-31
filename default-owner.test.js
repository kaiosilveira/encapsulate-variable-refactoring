const { defaultOwner, setDefaultOwner } = require('./default-owner');

describe('defaultOwner', () => {
  describe('getDefaultOwner', () => {
    it('should return the default owner', () => {
      const owner = defaultOwner();
      expect(owner.firstName).toEqual('Kaio');
      expect(owner.lastName).toEqual('Silveira');
    });
  });

  describe('setDefaultOwner', () => {
    beforeEach(() => {
      setDefaultOwner({ firstName: 'Kaio', lastName: 'Silveira' });
    });

    afterEach(() => {
      setDefaultOwner({ firstName: 'Kaio', lastName: 'Silveira' });
    });

    it('should change the default owner', () => {
      setDefaultOwner({ firstName: 'Enzo', lastName: 'Silveira' });

      const owner = defaultOwner();
      expect(owner.firstName).toEqual('Enzo');
      expect(owner.lastName).toEqual('Silveira');
    });

    it('should not change the original record when changing props directly', () => {
      const originalOwner = defaultOwner();

      let owner = defaultOwner();
      owner.firstName = 'Enzo';

      expect(originalOwner.firstName).toEqual('Kaio');
    });
  });
});
