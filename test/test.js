var assert = require('assert');
var fs = require('fs');
var locations = require('../js/locations');

// Basic test with mocha :)

describe('Location of  ', function() {
  
    it('1 is correct', function() {
      assert.equal("Baker Street", locations[0].title);
      assert.equal(51.52265, locations[0].loc.lat);
      assert.equal(-0.15704, locations[0].loc.lng);
    });
     it('3 is correct', function() {
      assert.equal("Hyde Park Corner", locations[2].title);
      assert.equal(51.50313, locations[2].loc.lat);
      assert.equal(-0.15278, locations[2].loc.lng);
     
    });
      it('total number is correct', function() {
      assert.equal(5, locations.length);
    });
  
});



