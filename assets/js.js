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

var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var townName = document.querySelector("#town");
var getweather = function () {
  var city = cityInputEl.value.trim();

  var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=f0ff70779b3b3459372814ccdabbd7fd`;

  console.log("start a string" + city + "end of the string");

  console.log(`start the string ${city} end of string`);

  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      townName.innerHTML = data.city.name;

      for (let i = 0; i < data.list.length; i += 8) {
          var card = document.createElement("div");
          var title = document.createElement("h4");
          var temp = document.createElement("p");
          
          card.setAttribute(
            "class",
            "col-md-2 bg-danger text-white border border-dark mr-3"
          );
          title.innerHTML = data.list[i].dt_txt;
          
          card.innerHTML = "fish tacos";
          document.querySelector("#cardBox").append(card);
          card.append(title);

          temp.innerHTML = data.list[i].dt_txt;
          document.querySelector("#cardBox").append(temp);
          card.append(temp);



        console.log(data);
      }

      displaycity(data);
    });
  });
};

// search for a city
var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(event);

  //get value from input element

  if (city) {
    getweather(city);
    cityInputEl.value = "";
  } else {
    alert("Enter a city you dummy");
  }
};

// getweather();

cityFormEl.addEventListener("submit", formSubmitHandler);

//function to display city weather to html
var displaycity = function (weather) {
  console.log();
};
