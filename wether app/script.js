async function getWeather() {
  const city = document.getElementById("search").value;

  if (!city) {

    document.getElementById("city").textContent = "City Name";
    document.getElementById("tem").textContent = "--°C";
    document.getElementById("hum").textContent = "Humidity";
    document.getElementById("wind").textContent = "Wind";
    document.getElementById("weatherDesc").textContent = "Description";
  
    alert("Please enter a city name!");
    return;
  }

  const apiKey = "0fe19bfe05383151273403ae4f705d2a"; // Use your own API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    // ✅ Update Weather Info
    document.getElementById("city").textContent = data.name;
    document.getElementById("tem").textContent = data.main.temp + "°C";
    document.getElementById("hum").textContent = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").textContent = "Wind: " + data.wind.speed + " m/s";
    document.getElementById("weatherDesc").textContent = data.weather[0].description;

    // ✅ Set Weather Icon
    const iconCode = data.weather[0].icon;
    const icon = document.getElementById("img");
    icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
  } catch (error) {
    alert("Error: " + error.message);
    console.error(error);
  }
}

// 🔍 Click Listener
let button = document.getElementById('icon');
button.addEventListener('click', function () {
  getWeather();
});
