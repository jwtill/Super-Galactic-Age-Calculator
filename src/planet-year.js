export default class PlanetYear {
  constructor(age) {
    this.age = age;
  }
  getMercuryYear() {
    return this.age * .24;
  }
}

