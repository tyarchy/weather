// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


var cityFormEl = document.querySelector("#city-form")
var cityInputEl = document.querySelector("#city")



var getweather = function() {

    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=36.73&lon=-119.78&exclude=hourly,daily&appid=f0ff70779b3b3459372814ccdabbd7fd";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
          console.log(data);
        });
      });
    };

 // search for a city
  var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);

    //get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getweather(city);
        cityInputEl.value = "";
    } else {
        alert ("Enter a city you dummy")
    }
    
  };

  getweather();

  cityFormEl.addEventListener("submit", formSubmitHandler);


  

















































