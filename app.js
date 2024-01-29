const API_key = `690c387d482ed3087563e070aa8ee14b`;

const loadWeatherData = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    .then((response) => response.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("city", data.name);
  setInnerTextById("weather-type", data.weather[0].main);
};

// Set inner text by id
const setInnerTextById = (id, innerText) => {
  const element = document.getElementById(id);
  element.innerText = innerText;
};

// Search Functionality
document.getElementById("search-button").addEventListener("click", function () {
  const searchFieldElement = document.getElementById("search-field");
  const searchValue = searchFieldElement.value;
  loadWeatherData(searchValue);
});

// Enter Button Functionality
document.getElementById("search-field").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const searchFieldElement = document.getElementById("search-field");
    const searchValue = searchFieldElement.value;
    loadWeatherData(searchValue);
  }
});
