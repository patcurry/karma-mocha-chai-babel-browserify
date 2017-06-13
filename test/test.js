var assert = require("chai").assert;

describe('Smoke Tests', function() {
  describe('The addition of 2 and 1', function() {
    it('should return 3', function() {
      assert.equal(2+1, 3);
    }); 
  });

  describe('The addition of 2 and "nachos"', function() {
    it('should not return a number', function() {
      assert.notEqual(typeof(2 + 'nachos'), 'number')
    });
    it('should return a string', function() {
      assert.equal(typeof(2 + 'nachos'), 'string')
    })
  });
});
