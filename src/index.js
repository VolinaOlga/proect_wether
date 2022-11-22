let now = new Date();

let h5 = document.querySelector("#day");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

h5.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#heading");
  let cityName = document.querySelector("#search-enter-city");
  city.innerHTML = `${cityName.value}`;
}
let searchCityButton = document.querySelector("#showPosition");
searchCityButton.addEventListener("click", search);

function celsius(event) {
  event.preventDefault();
  let tempCelsius = document.querySelector(".number");
  tempCelsius.innerHTML = "25";
}
let changeCelsius = document.querySelector("#celsius");
changeCelsius.addEventListener("click", celsius);

function farengeigt(event) {
  event.preventDefault();
  let tempFarengeigt = document.querySelector(".number");
  tempFarengeigt.innerHTML = "77";
}
let changeFarengeigt = document.querySelector("#farengeigt");
changeFarengeigt.addEventListener("click", farengeigt);
function showTemperature(response) {
  document.querySelector("#heading").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =
    Math.round(response.data.main.temp) + "°C";
}
function searchCity(city) {
  let apiKey = "16e9550d3526f189d453e6d36a97331c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-enter-city").value;
  searchCity(city);
}

function showPosition(position) {
  let apiKey = "16e9550d3526f189d453e6d36a97331c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function getCurrentLocation(event) {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let enterCity = document.querySelector("#searchform");
enterCity.addEventListener("submit", showCity);
let currentButton = document.querySelector("#showPosition");
currentButton.addEventListener("click", getCurrentLocation);
