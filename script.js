const WEATHER_CONTAINER = document.getElementById("weather-container");
const CITY = document.getElementById("city");
const CITY_BTN = document.getElementById("city_btn");

CITY_BTN.addEventListener("click", async (e) => {
  e.preventDefault();
  const city_value = CITY.value.trim();
  console.log(city_value);
  // Check if movie input is empty
  if (!city_value) {
    alert("Add city");
    return;
  }
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=b61755bedf3ba9c4dbab67bcbf3c4cbe`
    );
    const w_data = response.data;
    console.log(w_data);

    WEATHER_CONTAINER.innerHTML = `
      <div class="container">
        <div class="div_holder">
          <h2> ${w_data.name} ${w_data.sys.country}</h2>
          <p class="p_class">
            <span class="span_">Lat: ${w_data.coord.lat}</span>
            <span class="span_">Lon: ${w_data.coord.lon}</span>
          </p> 
        </div>

        <div class="div_holder">
          <h2>Temperature</h2>
          <p class="p_class">
            <span class="span_">Temp: ${w_data.main.temp} °C</span>
            <span class="span_">Humidity: ${w_data.main.humidity} %</span>
          </p>
        </div>
      </div>

      <div class="container">
        <div class="div_holder">
          <h2>Wind</h2>
          <p class="p_class">
            <span class="span_">Speed: ${w_data.wind.speed} m/s</span> 
            <span>from</span>
            <span class="span_">Deg: ${w_data.wind.deg}°</span>
          </p>
        </div>

        <div class="div_holder">
          <h2>${w_data.weather[0].main}</h2>
          <p class="p_class">
            <span class="span_">${w_data.weather[0].description}</span>
          </p>
        </div>
      </div>
    `;

    CITY.value = "";
  } catch (error) {
    console.log(error);
  }
});
