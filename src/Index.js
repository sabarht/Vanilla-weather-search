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

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function search(city) {
  let units = "metric";
  let apiKey = "3586082911a3bafc0ae4afd4377c0a7c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  search(searchInput.value);
}
search("berlin");
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
/*function showWeeklyTemperature(params) {}
  let apiUrl1 =
  "https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=3586082911a3bafc0ae4afd4377c0a7c";
  console.log(apiUrl1);
  */
