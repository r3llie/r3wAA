function displayTemperature(response) {
  let city = document.querySelector("#city-element");
  city.innerHTML = response.data.name;
  let temperature = document.querySelector("#number-temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#weather-description");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity-number");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind-number");
  wind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "6f578b96aa9505bcce148ac22cb85794";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
