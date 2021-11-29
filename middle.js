const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// const eqArrays = function(arr1, arr2) {
//   let result = true;
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         result = false;
//         break;
//       }
//     }
//   }
//   return result;
// };



// const assertArraysEqual = function(arr1, arr2, expected) {
//   if (eqArrays(arr1, arr2) === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${eqArrays(arr1, arr2)} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${eqArrays(arr1, arr2)} !== ${expected}`);
//   }
// };



const middle = function(arr) {
  let newArr = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      newArr.push(arr[arr.length / 2 - 1]);
      newArr.push(arr[arr.length / 2]);
    } else {
      newArr.push(arr[Math.floor(arr.length / 2)]);
    }
  }
  return newArr;
};


module.exports = middle;