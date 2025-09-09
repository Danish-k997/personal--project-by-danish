async function getWeather() {
    let city = document.getElementById('search').value

    if (!city) {
        alert('please enter a city name')
        return
    }
    let apiKey = "0fe19bfe05383151273403ae4f705d2a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url)
        const date = await response.json()
        if (date.cod === '404') {
           alert('city is not found') 
        }

        document.getElementById('city').textContent = date.name;
        document.getElementById('tem').textContent = date.main.temp + "°C";
        document.getElementById('weatherDesc').textContent = date.weather[0].description;
        document.getElementById('hum').textContent = "Humidity: " + date.main.humidity + "%";
        document.getElementById('wind').textContent = "Wind: " + date.wind.speed + " m/s";

        let iconCode =  date.weather[0].icon;
        let icon = document.getElementById('img') 
        icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    } catch (error) {
        alert('Error:' + error.message)
        console.error(error)
    }
}

let button = document.getElementById('icon')
button.addEventListener('click', function () {
    getWeather()
})