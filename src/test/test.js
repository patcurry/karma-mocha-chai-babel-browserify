var assert = require("chai").assert;

describe('Smoke Tests', function () {
  describe('The addition of 2 and 1', function () {
    it('should return 3', function () {
      assert.equal(2+1, 3);
    }); 
  });

  describe('The addition of 2 and "nachos"', function () {
    it('should not return a number', function () {
      assert.notEqual(typeof(2 + 'nachos'), 'number')
    });
    it('should return a string', function () {
      assert.equal(typeof(2 + 'nachos'), 'string')
    })
  });
});


// why would I test stuff before it was transformed?
// does babel transform things when the test function is called?
// I am actually not sure if this is a good way to test babel, because all this stuff works
// in node... So this part of the project should come when things are being tested in browsers
/*
describe('ES6 Smoke Tests', () => {
  describe('ES6 squaring function with arrow function and const declaration', () => {
    const square = n => n * n
    it('should return the square of the number it is given', () => {
      assert.equal(square(4), 16)
    })
  }) 

  describe('The Object.values() function, which does not work in all browsers', () => {
    const obj = {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
    it('should return an array of values from a key value object', () => {
      const expected = Object.values(obj)
      assert(Array.isArray(expected))
    })
  })
})
*/
