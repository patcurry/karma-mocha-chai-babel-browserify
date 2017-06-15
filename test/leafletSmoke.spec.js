describe('Leaflet', function () {
  describe('Options', function () {
    it('should have a center point', function () {
      assert.equal(myMap.getCenter().lat, 38)
    });
  });
});
