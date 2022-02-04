/* eslint-disable no-undef */
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

describe('getVenusYear', () => {

  test('Should return persons age in Venusian years', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.getVenusYear(47)).toEqual(29.14);
  });
});

describe('getVenusYear', () => {

  test('Should return persons age in Martian years', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.getMarsYear(47)).toEqual(88.36);
  });
});