'use strict'
let assert = require("assert");
let countRegNumber = require("../countRegNumber");
describe('4. Counts the number of registration plates', function(){

  it('returns number of registrations (3)', function(){

    assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"), 3);

  });
  it('returns number of registration (9)', function(){

    assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328"), 9);

  });
});
