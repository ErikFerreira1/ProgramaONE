document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiKey = '3e9acb87ead5d97263e41c0dcb60a24a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Erro ao obter dados do clima:', error);
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = '';
    
    const cityName = document.createElement('h2');
    cityName.textContent = data.name;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperatura: ${data.main.temp}°C`;

    const description = document.createElement('p');
    description.textContent = `Descrição: ${data.weather[0].description}`;

    weatherResult.appendChild(cityName);
    weatherResult.appendChild(temperature);
    weatherResult.appendChild(description);
}