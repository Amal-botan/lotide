const assertArraysEqual = require("../assertArraysEqual.js");
// const assertEqual = require("../assertEqual.js");
// const eqArrays = require("../eqArrays.js");

assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1], true); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => false



