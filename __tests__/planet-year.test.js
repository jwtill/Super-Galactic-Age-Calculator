import PlanetYear from './../src/planet-year.js';

describe('PlanetYear', () => {

  test('should construct PlanetYear object', () => {
    const planetYear = new PlanetYear("47");
    expect(planetYear.age).toEqual("47");
  });
});