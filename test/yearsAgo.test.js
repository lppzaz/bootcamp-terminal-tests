'use strict'
let assert = require("assert");
let yearsAgo = require("../yearsAgo");
describe("6.Takes a year and finds out how many years ago it was",function(){

    it("identifies current year and subtracts year in question to find how many years ago(42)",function(){
      assert.equal(yearsAgo(1976), 42);
  });
  it("identifies current year and subtracts year in question to find how many years ago(108)",function(){
    assert.equal(yearsAgo(1910), 108);
  });
});
