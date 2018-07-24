'use strict'
let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");
describe("10, Seperates a string of sms and calls, counts the rand value to get total costs",function(){

    it("counts all sms and calls to give total cost(R7.45)",function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");
  });
  it("counts all sms and calls to give total cost(R3.40)",function(){
    assert.equal(totalPhoneBill('call, sms'), "R3.40");
});
});
