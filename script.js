// Function to update the temperature on the webpage
function updateTemperature(temperature) {
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.textContent = temperature;
}

// Function to fetch the temperature data from ESP32
function fetchTemperature() {
    fetch('/getTemperature')
        .then(response => response.text())
        .then(temperature => updateTemperature(temperature))
        .catch(error => console.error('Error fetching temperature:', error));
}

// Fetch temperature every 5 seconds (adjust the interval as needed)
setInterval(fetchTemperature, 5000);
