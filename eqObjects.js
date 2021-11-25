// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// const eqObjects = function(obj1, obj2) {
//   let result = false;
//   let numOfKeysObj1 = Object.keys(obj1).length
//   let numOfKeysObj2 = Object.keys(obj2).length
//   let numOfSameKeysAndValues = 0;

//   if (numOfKeysObj1 === numOfKeysObj2) {
//   for (const key1 in obj1) {
//   // console.log(key1);

//     for (const key2 in obj2) {
//     //  console.log(key2);
//       if(obj1[key1] instanceof Array && obj2[key2] instanceof Array){
//         if (eqArrays(obj1[key1],obj2[key2]) && key1 === key2){
//           numOfSameKeysAndValues++;
//         }
//       } else {
//         if (key1 === key2 && obj1[key1] === obj2[key2]) {
//          numOfSameKeysAndValues++;
//         }
//       }
//     }
//   }

//   if (numOfSameKeysAndValues === numOfKeysObj1) {
//     result = true;
//   } else {
//     result = false;
//   }
//   }

//   console.log(result)
//   return result; //boolean
// };



const eqObjects = function(obj1, obj2) {
  let result = false;
  let numOfKeysObj1 = Object.keys(obj1).length;
  let numOfKeysObj2 = Object.keys(obj2).length;
  let numOfSameKeysAndValues = 0;

  if (numOfKeysObj1 === numOfKeysObj2) {
    for (const key1 in obj1) {
      console.log(key1);
      //  console.log(key2);
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

  console.log(numOfSameKeysAndValues);
  console.log(numOfKeysObj1);

  if (numOfSameKeysAndValues === numOfKeysObj1) {
    result = true;
  } else {
    result = false;
  }


  console.log(result);
  return result; //boolean
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


const cd3 = { c: "1", d: ["2", 3, 4], e: ["2", 2, 3] };
assertEqual(eqObjects(cd3, cd2), false); // => false

//console.log(Object.keys(cd2).length);