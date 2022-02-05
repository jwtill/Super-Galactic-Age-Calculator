import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlanetYear from './planet-year';




// UI
$('form').submit(function(event){
  event.preventDefault();
  let age = $("#age").val();
  let planet = $("#planet").val();
  let planetYear = new PlanetYear(age, planet);
  $("#solar-age").html(planetYear.earthAge);
});