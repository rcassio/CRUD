const Crud = artifacts.require('Crud');

contract('Crud', () => {
  let instance  = null;
  before( async () => {
    instance = await Crud.deployed();
  });

  it('should do test', async () => {
    const result = await instance.test();
    assert(result == 'test');
  });

  it('should create a new user', async () => {
    await instance.create('Frank');
    const user = await instance.read(1);
    assert(user[0].toNumber() === 1);
    assert(user[1] === 'Frank');
  });

  it('Should update a user', async () => {
    await instance.update(1, 'Isabela');
    const user = await instance.read(1);
    assert(user[0].toNumber() === 1);
    assert(user[1] === 'Isabela');
  });

  it('Should not update a non-existing user', async () => {
    try {
      await instance.update(2, 'Frank');
    } catch (e) {
      assert(e.message.includes('User not found'));
      return;
    }
    assert(false);
  });

  it('Should destroy a user', async () => {
    await instance.destroy(1);
    try {
      await instance.read(1);
    } catch (e) {
      assert(e.message.includes('User not found'));
      return;
    }
    assert(false);
  });

  it('Should not destroy a non-existing user', async () => {
    try {
      await instance.destroy(10);
    } catch (e) {
      assert(e.message.includes('User not found'));
      return;
    }
    assert(false);
  });
});