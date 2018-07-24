'use strict'
let assert = require("assert");
let fromWhere = require("../fromWhere");
describe("11.Checks reg number",function(){

  it("identifies area of plate is CY",function(){
      assert.equal(fromWhere('CY 1234'), 'Bellville');
  });

  it("identifies area of plate is from CJ",function(){
    assert.equal(fromWhere('CJ 1234'), 'Paarl');
  });

  it("identifies area of plate is from CA",function(){
  assert.equal(fromWhere('CA 1234'), 'Cape Town');
  });

  it("identifies area of plate is from some other place",function(){
  assert.equal(fromWhere('CB 1234'), 'Some other place!');
  });

});
