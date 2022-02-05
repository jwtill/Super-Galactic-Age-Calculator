import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlanetYear from './planet-year';


const getPlanetAge = (planetYear) => {
  if (planetYear.planet === "mercury") {
    return planetYear.getMercuryAge();
  } else if (planetYear.planet === "venus") {
    return planetYear.getVenusAge();
  } else if (planetYear.planet === "mars") {
    return planetYear.getMarsAge();
  } else if (planetYear.planet === "jupiter") {
    return planetYear.getJupiterAge();
  } else {
    return ("error");
  }
};

// UI
$('form').submit(function(event){
  event.preventDefault();
  let age = $("#age").val();
  let planet = $("#planet").val();
  let planetYear = new PlanetYear(age, planet);
  console.log(planetYear);
  let solarAge = getPlanetAge(planetYear);
  $("#solar-age").html(solarAge);
});