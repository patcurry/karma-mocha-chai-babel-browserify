describe('Leaflet', function () {
  describe('Options', function () {
    it('It should have a center point', function () {
      assert.equal(myMap.getCenter().lat, 38);
    });
  });
});
