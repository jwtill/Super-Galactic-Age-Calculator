export default class PlanetYear {
  constructor(earthAge, planet) {
    this.earthAge = earthAge;
    this.planet = planet;
  }
  getMercuryAge() {
    return (Math.round((this.earthAge/.24 ) * 100))/100;
  }
  getVenusAge() {
    return (Math.round((this.earthAge/.62) * 100))/100;
  }
  getMarsAge() {
    return (Math.round((this.earthAge/1.88) * 100))/100;
  }
  getJupiterAge() {
    return (Math.round((this.earthAge/11.86 ) * 100))/100;
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
