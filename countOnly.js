// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countOnly = function(allItems, itemsToCount) {
  let results = {}; //making empty object
  for (const item1 of allItems) {
    results[item1] = 0; //setting keys to my object and setting those keys to 0
  }
  for (const item of allItems) { //iterating through my array items
    // results[item] = 0;
    // console.log(item);
    for (const nameKey in itemsToCount) { //iterating through my object keys
      if (item === nameKey && itemsToCount[nameKey] === true) { //comparing my array value to the key name, and seeing if the key value is true as well
      //  console.log(nameKey);
        results[nameKey] += 1; //incrementing each new key value of my result if expression is true
      }
    }
  }
  for (const value in results) { //iterating through my result to turn all zero values into undefind to match the assertion tests
    if (results[value] === 0) {
      results[value] = undefined;
    }
  }
    

  console.log(results); //console.logging my result object to see results
  return results; //returning value of result depending on the array.
};




//Test Cases

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);