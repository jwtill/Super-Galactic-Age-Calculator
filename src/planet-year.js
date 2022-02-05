export default class PlanetYear {
  constructor(earthAge, planet) {
    this.earthAge = earthAge;
    this.planet = planet;
  }
  getMercuryAge() {
    return this.earthAge * .24;
  }
  getVenusAge() {
    return this.earthAge * .62;
  }
  getMarsAge() {
    return this.earthAge * 1.88;
  }
  getJupiterAge() {
    return this.earthAge * 11.86;
  }
  yearsLeft(planet) {
    let solarAge;
    if (this.earthAge > 77) {
      return (Math.abs(this.earthAge - 77)); 
    }
    else {
      if (planet === "mercury") {
        solarAge = ((77 - this.earthAge) * .24);
      }
      else if (planet === "venus") {
        solarAge = ((77 - this.earthAge) * .62);
      }
      else if (planet === "mars") {
        solarAge = ((77 - this.earthAge) * 1.88);
      }
      else if (planet === "jupiter") {
        solarAge = ((77 - this.earthAge) * 11.86);
      }
      else {
        solarAge = (77 - this.earthAge);
      }
      return solarAge;
    }
  }
}

// getPlanetAge(planetMultiplier) {
//   return this.earthAge * planetMultiplier;
// }

// class Planet {
//   constructor() {
//     this.name = name; //name from input
//     this.solarYear = solarYear; //multiplier
//   }
// }

