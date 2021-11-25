// FUNCTION IMPLEMENTATION
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


const letterPositions = function(sentence) { //func takes in a string
  let result = {}; //created empty object
  let newSentence = sentence.toLowerCase(); //created string to hold sentence with the removed spaces and lower cased
  //console.log(newSentence);

  for (const value of newSentence) { //created object of result to have a key for each letter of the sentence
    result[value] = []; //set each key to zero
  }

  for (let i = 0; i < newSentence.length; i++) { //iterating through each letter of the sentence
    // console.log(letterSentence);
    for (const letterResult in result) { //iterating through object
      if (letterResult === newSentence[i]) { //checking if object key equals any of the letters of the sentence
        result[newSentence[i]].push(i); //incremneting if it does
      }
    }
  }
  delete result[" "];
  console.log(result);
  return result; //count of each of the letters in the sentence in the result
};

//Testing
const result1 = letterPositions("Lighthouse In the house");


assertArraysEqual(result1["i"], [1, 11], true);
assertArraysEqual(result1["g"], [2],true);
assertArraysEqual(result1["h"], [3,5,15,18], true);
