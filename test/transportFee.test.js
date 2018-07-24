'use strict'
let assert = require("assert");
let transportFee = require("../transportFee");
describe("9. Checks time of shift",function(){

    it("identifies if it is a morning shift (R20)",function(){
      assert.equal(transportFee("morning"), "R20");
  });
  it("identifies if it is a afternoon shift (R10)",function(){
    assert.equal(transportFee("afternoon"), "R10");

  });it("identifies if it is a night shift (free)",function(){
    assert.equal(transportFee("nightshift"), "free");
});
});
