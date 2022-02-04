export default class PlanetYear {
  constructor(earthAge) {
    this.earthAge = earthAge;
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
    if (planet === "mercury") {
      return ((77 - this.earthAge) * .24);
    }
    else if (planet === "venus") {
      return ((77 - this.earthAge) * .62);
    }
    else if (planet === "mars") {
      return ((77 - this.earthAge) * 1.88);
    }
    else {
      return (77 - this.earthAge);
    }
  }
  
}

