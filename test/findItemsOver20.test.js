'use strict'
let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe("12. Checks all items quantities over 20",function(){

    it("identifies all item quantities and lists the number over 20 returns items over 20",function(){
      assert.deepEqual(findItemsOver20(
    [{name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]),
[{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
  });
  it("checks what happens when all items under 20, returns empty array",function(){
    assert.deepEqual(findItemsOver20( 
  [{name : 'apples', qty : 10},
  {name : 'pears', qty : 7},
  {name : 'bananas', qty : 5},
  {name : 'apples', qty : 3}]),[]);
});

});
