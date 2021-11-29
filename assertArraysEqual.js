const eqArrays = require("./eqArrays");



const assertArraysEqual = function(arr1, arr2, expected) {
  if (eqArrays(arr1, arr2) === expected) {
    console.log(`✅✅✅ Assertion Passed: ${eqArrays(arr1, arr2)} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${eqArrays(arr1, arr2)} !== ${expected}`);
  }
};



module.exports = assertArraysEqual;