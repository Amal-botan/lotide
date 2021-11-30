const assert = require('chai').assert;
const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');



describe("#tail: ", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Hello"]), ["Lighthouse", "Hello"]);
  });


});
