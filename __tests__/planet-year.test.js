/* eslint-disable no-undef */
import PlanetYear from './../src/planet-year.js';
// import yearsLeft from './../src/planet-year.js';

describe('PlanetYear', () => {

  test('should construct PlanetYear object', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.earthAge).toEqual(47);
  });
});

describe('getMercuryAge', () => {

  test('Should return persons age in Mercurian years', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.getMercuryAge(47)).toEqual(11.28);
  });
});

describe('getVenusAge', () => {

  test('Should return persons age in Venusian years', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.getVenusAge(47)).toEqual(29.14);
  });
});

describe('getVenusAge', () => {

  test('Should return persons age in Martian years', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.getMarsAge(47)).toEqual(88.36);
  });
});

describe('getJupiterAge', () => {

  test('Should return persons age in Jovian years', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.getJupiterAge(47)).toEqual(557.42);
  });
});

describe('yearsLeft', () => {
  test('Should return 77 - earthAge * mercury year multiplier', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.yearsLeft("mercury")).toEqual((77-47)*.24);
  });
  test('Should return 77 - earthAge * venus year multiplier', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.yearsLeft("venus")).toEqual((77-47)*.62);
  });
  test('Should return 77 - earthAge * mars year multiplier', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.yearsLeft("mars")).toEqual((77-47)*1.88);
  });
  test('Should return 77 - earthAge * jupiter year multiplier', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.yearsLeft("jupiter")).toEqual((77-47)*11.86);
  });
  test('Should return 77 - earthAge if nothing is passed in', () => {
    const planetYear = new PlanetYear(47);
    expect(planetYear.yearsLeft("")).toEqual(30);
  });
  test('Should return the number of years over if user enters an age above life expentancy', () => {
    const planetYear = new PlanetYear(80);
    expect(planetYear.yearsLeft()).toEqual(3);
  });
  

  


  
});