'use strict'
let assert = require("assert");
let isWeekday = require("../isWeekday");
describe("5.checks weekend or weekday",function(){
      it("Checks if it is weekend",function(){
      assert.equal(isWeekday('Saturday'), false);
  });
      it("check if it is weekday",function(){
        assert.equal(isWeekday('Monday'), true);
});
});
