// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) { //func takes in a string
  let result = {}; //created empty object
  let newSentence = sentence.split(" ").join("").toLowerCase(); //created string to hold sentence with the removed spaces and lower cased
  //console.log(newSentence);

  for (const value of newSentence) { //created object of result to have a key for each letter of the sentence
    result[value] = 0; //set each key to zero
  }

  for (const letterSentence of newSentence) { //iterating through each letter of the sentence
    // console.log(letterSentence);
    for (const letterResult in result) { //iterating through object
      if (letterResult === letterSentence) { //checking if object key equals any of the letters of the sentence
        result[letterSentence]++; //incremneting if it does
      }
    }
  }
  //console.log(result);
  return result; //count of each of the letters in the sentence in the result
};

//Testing
const result1 = countLetters("Lighthouse In the house");


assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
