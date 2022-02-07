import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlanetYear from './planet-year';


const getPlanetAge = (planetYear) => {
  if (planetYear.planet === "Mercury") {
    return planetYear.getMercuryAge();
  } else if (planetYear.planet === "Venus") {
    return planetYear.getVenusAge();
  } else if (planetYear.planet === "Mars") {
    return planetYear.getMarsAge();
  } else if (planetYear.planet === "Jupiter") {
    return planetYear.getJupiterAge();
  } else {
    return ("error");
  }
};

const ageChecker = (age) => {
  if ((age < 1 ) || (isNaN(age))) {
    $("#solar-age").html("Please enter and number above 0");
    $("#age").val("");
    return false;
  }
  else {
    return true;
  }
};

// UI
$('form').submit(function(event){
  event.preventDefault();
  let age = $("#age").val();
  if (ageChecker(age) === true) {
    let planet = $("#planet").val();
    let planetYear = new PlanetYear(age, planet);
    let solarAge = getPlanetAge(planetYear);
    $("#solar-age").html(solarAge + " " + planetYear.planet + " years");
  } else {
    return false;
  }
});