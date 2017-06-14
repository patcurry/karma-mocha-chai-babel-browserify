const assert = chai.assert;
// const smoke = require('../src/smoke.js')


describe('Leaflet Tests', function () {
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

// here we go, this fails in firefox, but not opera or chrome.
// time to add babel in here some how

// what if I do it through browserify

describe('ES6 Smoke Tests', () => {
  describe('ES6 squaring function with arrow function and const declaration', () => {
    it('should return the square of the number it is given', () => {
      assert.equal(smoke.square(4), 16)
    })
  }) 

  describe('The Object.values() function, which does not work in all browsers', () => {
    it('should return an array of values from a key value object', () => {
      const expected = Object.values(smoke.obj)
      assert(Array.isArray(expected))
    })
  })
})

