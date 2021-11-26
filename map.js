const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
        break;
      }
    }
  } else {
    result = false;
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


//logic of map function
const map = function(array, callback) {
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["happy", "sad", "confused", "joyful", "upset"];
const words2 = ["up", "down", "left"];

const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words2, word => word[0]);
console.log(results1);



assertArraysEqual(results1, ["g", "c", "t", "m", "t"], true);
assertArraysEqual(results2, ["h", "s", "c", "j", "u"], true);
assertArraysEqual(results3, ["u", "d", "l"], true);