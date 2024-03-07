function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature-number");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#weather-app-city");
  let description = document.querySelector("#weather-description");
  let humidity = document.querySelector("#weather-humidity");
  let speed = document.querySelector("#wind-speed");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  time.innerHTML = formatDate(date);
  speed.innerHTML = `${response.data.wind.speed} km/h`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  city.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "b6461bfaaot32c8f10f63ac1e954cc39";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearchCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];

  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
  <div class="weather-forecast-day">
    <div class="weather-forecast-date">${day}</div>
     <div class="weather-forecast-icon">🌤️</div>
    <div class="weather-forecast-temperatures">
      <div class="weather-forecast-temperature-max"> 15º </div>
      <div class="weather-forecast-temperature-min">9º</div>
    </div>
  </div>
`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchCity);

searchCity("Lisbon");

displayForecast();
