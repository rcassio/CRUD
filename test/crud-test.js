const Crud = artifacts.require("Crud");

contract('Crud', () => {
  let instance  = null;
  before( async () => {
    instance = await Crud.deployed();
  });

  it("should do test", async () => {
    const result = await instance.test();
    assert(result == "test");
  });
});