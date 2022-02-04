export default class PlanetYear {
  constructor(age) {
    this.age = age;
  }
  getMercuryYear() {
    return this.age * .24;
  }
  getVenusYear() {
    return this.age * .62;
  }
  getMarsYear() {
    return this.age * 1.88;
  }
}

