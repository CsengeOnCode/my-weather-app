function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature-number");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#weather-app-city");
  city.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchCity);

searchCity("Lisbon");
