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


const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newString = arr[i].toString();
    if (newString.length > 1) {
      let splitString = newString.split(',');
      for (let j = 0; j < splitString.length; j++) {
        newArr.push(parseInt(splitString[j]));
      }
    } else {
      newArr.push(parseInt(newString));
    }
  }
  return newArr;
};



console.log(assertArraysEqual(flatten([1, 2, [2,3,4],3]), [1, 2, 2, 3, 4, 3], true));
