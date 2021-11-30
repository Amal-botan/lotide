const assert = require('chai').assert;
//const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

// assertEqual(head([5,2,3,4]), 5);
// assertEqual(head([]), 5);


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });


  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns '5' for [5,2,3,4]", () => {
    assert.strictEqual(head([5,2,3,4]), 5); 
  });

});






