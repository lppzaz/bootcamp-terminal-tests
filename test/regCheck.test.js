'use strict'
let assert = require("assert");
let regCheck = require("../regCheck");
describe("3. Checks reg number",function(){

    it("identifies area of plate is GP",function(){
      assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
  it("identifies area of plate is NOT GP",function(){
    assert.equal(regCheck('DV 23 NB GP', 'CY'), false);
});
});
