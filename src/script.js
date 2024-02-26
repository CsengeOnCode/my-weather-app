function handleSearchCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#weather-app-city");
  city.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchCity);
