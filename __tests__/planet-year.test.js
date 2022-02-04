import PlanetYear from './../src/planet-year.js';

describe('PlanetYear', () => {

  test('should construct PlanetYear object', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.age).toEqual(47);
  });
});

describe('getMercuryYear', () => {

  test('Should return persons age in Mercurian years', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.getMercuryYear(47)).toEqual(11.28);
  });
});