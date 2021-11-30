const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual.js");
//const eqArrays = require("../eqArrays.js");
const middle = require("../middle.js");



// assertArraysEqual(middle([1]), [], true); // => []
// assertArraysEqual(middle([1, 2]), [], true); // => []
// assertArraysEqual(middle([1, 2, 3]), [2], true);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);

describe("#middle: ", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });


  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

  it("returns '[2]' for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });

  it("returns '[3]' for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });

  it("returns '[3,4]' for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

});