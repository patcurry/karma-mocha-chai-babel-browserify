const ls = require('../src/leafletSmoke.js');

const myMap = ls.myMap

describe('Leaflet', () => {
  describe('Options', () => {
    it('should have a center point', () => {
      assert.equal(myMap.getCenter().lat, 38)
    })
  })
})


