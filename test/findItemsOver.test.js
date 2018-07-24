'use strict'
let assert = require("assert");
let findItemsOver = require("../findItemsOver");
describe("13. Checks all items quantities over threshold",function(){

    it("identifies all item quantities and lists the number over threshold returns items over threshold",function(){
      assert.deepEqual(findItemsOver20(

    [{name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}], 20),

    [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
  });
  it("checks what happens when all items under threshold, returns empty array",function(){
    assert.deepEqual(findItemsOver20(  [{name : 'apples', qty : 10},
  {name : 'pears', qty : 7},
  {name : 'bananas', qty : 5},
  {name : 'apples', qty : 3}],9),[]);
});

});
