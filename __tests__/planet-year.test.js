import PlanetYear from ./../src/planet-year.js

describe('PlanetYear', () => {

  test('should create a new planet year object', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.age).toEqual(47);
  });
});