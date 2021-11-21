function formatDate(timestamp) {
  let now = new Date();

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
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
  return `Last Updated on ${day} ${hours} :${minutes}`;
}

function showForecast() {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = `    
    <div class="row">
      <div class="col-2">
        <div class="weather-forecast-date">Wednesday</div>
          
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            id="icon"
            alt="weather icon"
          >
          <div class="weather-forecast-temperature">
            <span class="weather-forecast-temperature-max">14</span>
            <span class="weather-forecast-temperature-min">5</span>
          </div>
        </div>
     
      </div>
    </div>`;
}

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");
  let cityElement = document.querySelector("#city");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.de * 1000);
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
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

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("tehran");
showForecast();
