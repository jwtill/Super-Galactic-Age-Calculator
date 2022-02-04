import { ModuleFilenameHelpers } from "webpack";

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
    let solarAge;
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
      solarAge = (this.earthAge);
    }
    if this.earthAge > 77 {
      return
    }
  }
}
