let now = new Date();
now.getMinutes(); // 0,1,2, 12
now.getHours(); //1, 2, 3, 4
now.getDate(); //1, 2, 3, 4
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let dateElement = document.querySelector("#date");
dateElement.innerHTML = `Last Updated on ${day} ${now.getHours()} :${now.getMinutes()}`;
/*function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-city-input");
  console.log(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
*/
function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.weather[0].description;
}
let units = "metric";
let city = "berlin";
let apiKey = "3586082911a3bafc0ae4afd4377c0a7c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);
