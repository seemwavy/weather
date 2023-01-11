import sun from './sun.jpg';
import clouds from './clouds.png';
import rain from './rain.jpg';
import snow from './snow.png';
import thunderstorm from './thunderstorm.jpg';
import tornado from './tornado.jpg';

const api = { 
    key: "b3ff6cab5334264ebf3515ac12ae43a0",
    base: "https://api.openweathermap.org/data/2.5/"
}
const contentBox = document.querySelector('.contentBox');
async function weatherReport(city) { 
    contentBox.innerHTML = '';
    try {
        let response = await fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`); 
        let data = await response.json()
        let weatherIcon = document.createElement('img');
        let cityHeader = document.createElement('h1');
        let weather = document.createElement('h2');
        cityHeader.innerHTML = "Your Weather Report for: " + data.name + " , " + data.sys.country;
        contentBox.appendChild(cityHeader);
        weather.innerHTML = `${data.weather[0].main}`;
        let lineBreak = document.createElement('br');
        contentBox.appendChild(lineBreak);
        contentBox.appendChild(weather);
        if (weather.innerHTML === 'Clouds') {
            weather.innerHTML = 'Cloudy';
            weatherIcon.src = clouds;
        }
        else if (weather.innerHTML === 'Clear') {
            weather.innerHTML = 'Clear';
            weatherIcon.src = sun;
        }
        else if (weather.innerHTML === 'Rain') {
            weather.innerHTML = 'Rainy';
            weatherIcon.src = rain;
        }
        else if (weather.innerHTML === 'Snow') {
            weather.innerHTML = 'Snowy';
            weatherIcon.src = snow;
        }
        else if (weather.innerHTML === 'Thunderstorm') {
            weather.innerHTML = 'Thunderstorm';
            weatherIcon.src = thunderstorm;
        }
        else if (weather.innerHTML === 'Drizzle') {
            weather.innerHTML = 'Drizzle';
            weatherIcon.src = rain;
        }
        else if (weather.innerHTML === 'Mist') {
            weather.innerHTML = 'Mist';
            weatherIcon.src = clouds;
        }
        else if (weather.innerHTML === 'Smoke') {
            weather.innerHTML = 'Smoke';
            weatherIcon.src = clouds;
        }
        else if (weather.innerHTML === 'Haze') {
            weather.innerHTML = 'Haze';
            weatherIcon.src = clouds;
        }
        else if (weather.innerHTML === 'Dust') {
            weather.innerHTML = 'Dust';
            weatherIcon.src = clouds;
        }
        else if (weather.innerHTML === 'Fog') {
            weather.innerHTML = 'Fog';
            weatherIcon.src = "clouds.png";
        }
        else if (weather.innerHTML === 'Sand') {
            weather.innerHTML = 'Sand';
            weatherIcon.src = 'clouds.png';
        }
        else if (weather.innerHTML === 'Ash') {
            weather.innerHTML = 'Ash';
            weatherIcon.src = 'clouds.png';
        }
        else if (weather.innerHTML === 'Squall') {
            weather.innerHTML = 'Squall';
            weatherIcon.src = clouds;
        }
        else if (weather.innerHTML === 'Tornado') {
            weather.innerHTML = 'Tornado';
            weatherIcon.src = tornado;
        }
        let temp = document.createElement('h2');
        let tempCelsius = Math.round(data.main.temp);
        let tempFahrenheit = (tempCelsius * 9/5) - 32;
        temp.innerHTML = `${tempFahrenheit}°F`;
        contentBox.appendChild(temp); 
        contentBox.appendChild(weatherIcon);
    }
    catch (error) {
        alert('Please enter a valid city name');
    }   
}
document.getElementById("weatherForm").addEventListener('submit', event => {
    event.preventDefault();
    let cityInput = document.getElementById('city');
    let city = cityInput.value;
    weatherReport(city);
  });