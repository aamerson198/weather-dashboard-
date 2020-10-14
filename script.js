$(document).ready(function () {
  console.log("This is loading!");
  // DOM VARIABLES

  // JS VARIABLES
  var APIKey = "a06ddccb5d8eb173daab6e42a55bbeec";
  // FUNCTION DEFINITIONS
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=Dunwoody,Georgia&appid=" +
    APIKey;
  // FUNCTION CALLS
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
  });
  // EVENT LISTENERS
});
