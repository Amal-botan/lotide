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

const without = function(arr, itemsToRemove) {
  let newArr = [...arr]; //deep clone
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (arr[i] === itemsToRemove[j]) {
        arr.splice(i, 1);
        // console.log(arr.length);
        // console.log(newArr.length);
      }
    }
  }
  return arr;
};

// TEST CODE

// console.log(without([1, 2, 3, 1, 4, 5], [1, 2]));
// console.log(without([1, 2, 3], [1,2,3,4]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"], true);
