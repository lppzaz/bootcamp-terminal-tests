'use strict'
let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");
describe("7. Checks reg number from Paarl",function(){

    it("identifies area of plate is CJ (3)",function(){
      assert.equal(countAllPaarl("CJ 345 123, CJ 2345, CJ 123"), 3);
  });
  it("identifies area of plate is CJ (2)",function(){
    assert.equal(countAllPaarl("CA 345 123, CJ 2345, CJ 123"), 2);
  });
});
