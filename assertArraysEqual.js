const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
        break;
      }
    }
  }
  return result;
};



const assertArraysEqual = function(arr1, arr2, expected) {
  if (eqArrays(arr1, arr2) === expected) {
    console.log(`✅✅✅ Assertion Passed: ${eqArrays(arr1, arr2)} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${eqArrays(arr1, arr2)} !== ${expected}`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1], true); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => false