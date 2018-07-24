'use strict'
let assert = require("assert");
let greet = require("../greet");
describe('1. Testing greeting function', function(){

  it('checks if it prints hello Cobus', function(){
	assert.equal('Hello, Cobus', greet('cobus'));

  });
  it('checks if it prints hello Siya', function(){

   assert.equal('Hello, Siya', greet('Siya'));

  });
});
