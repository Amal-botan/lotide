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


const eqObjects = function(obj1, obj2) {
  let result = false;
  let numOfKeysObj1 = Object.keys(obj1).length;
  let numOfKeysObj2 = Object.keys(obj2).length;
  let numOfSameKeysAndValues = 0;

  if (numOfKeysObj1 === numOfKeysObj2) {
    for (const key1 in obj1) {
      if (obj1[key1] instanceof Array && obj2[key1] instanceof Array) {
        if (eqArrays(obj1[key1],obj2[key1])) {
          numOfSameKeysAndValues++;
        }
      } else {
        if (obj1[key1] === obj2[key1]) {
          numOfSameKeysAndValues++;
        }
      }
    }
  }

  if (numOfSameKeysAndValues === numOfKeysObj1) {
    result = true;
  } else {
    result = false;
  }
  return result; //boolean
};



// const assertObjectsEqual = function(obj1, obj2, expected) {
//   const inspect = require('util').inspect;
//   if (eqObjects(obj1, obj2) === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} === ${inspect(obj2)}`);
//   }
// };

//Not sure if instructions wanted us to keep the expected paramter of not, if so then that soln is above.
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
};
  


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1"};
// assertEqual(eqObjects(ab, ba), true); // => true


assertObjectsEqual(ab, ba);



