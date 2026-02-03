const lat = 35.9557;
const lon = -80.0053;


const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;


function goTemp() {
window.location.href = "index.html";
}


function goConditions() {
window.location.href = "conditions.html";
}


fetch(url)
.then(res => res.json())
.then(data => {
const tempDiv = document.getElementById("temp");
const condDiv = document.getElementById("condition");


if (tempDiv) {
tempDiv.innerText = `${data.current_weather.temperature} °C`;
}


if (condDiv) {
condDiv.innerText = getCondition(data.current_weather.weathercode);
}
});


function getCondition(code) {
if (code === 0) return "Clear sky ☀️";
if (code <= 3) return "Partly cloudy 🌤️";
if (code <= 48) return "Foggy 🌫️";
if (code <= 67) return "Rainy 🌧️";
if (code <= 77) return "Snowy ❄️";
if (code <= 99) return "Stormy ⛈️";
return "Unknown";
}
