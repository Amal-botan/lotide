const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

assertEqual(head([5,2,3,4]), 5);
assertEqual(head([]), 5);