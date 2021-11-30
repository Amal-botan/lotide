const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let tailArr = arr.slice(1);
  return tailArr;
};



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail(["Amal","Botan","Abdulkadir"]));

module.exports = tail;