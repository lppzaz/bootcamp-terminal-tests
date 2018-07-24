'use strict'
let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe("8. Checks all reg number from specific town",function(){

    it("Checks how many reg are from stellies(3)",function(){
      assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', "CL"), 3);
  });
  it("Checks how many reg are from stellies(6)",function(){
    assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341,CL 124,CY 567,CL 345,CJ 456,CL 341', "CL"), 6);
});
  });
