import interfaceDOM from './interfaceDOM.js';
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
const GIPHY_API_KEY= process.env.GIPHY_API_KEY;


//cache the DOM
const locationEle = document.querySelector('[data-location]');
const temperatureEle = document.querySelector('[data-temperature]');
const statusEle = document.querySelector('[data-status]');
const dateEle = document.querySelector('[data-date]');
const feelsLikeEle = document.querySelector('[data-feels-like]');
const windEle = document.querySelector('[data-wind]');
const humidityEle = document.querySelector('[data-humidity]');


document.addEventListener('DOMContentLoaded', interfaceDOM);



function getWeather() {

	// create an IIFE for appLogic
	const getCurrentWeather =  (() => {
		
		const currentWeather = (city) => {

			let units, windSpeed, tempDegree;

			if(celsius.checked) {
				units = "&units=metric";
				windSpeed = " km/h";
				tempDegree = "\u2103";
			} else if(fahrenheit.checked) {
				units = "&units=imperial";
				windSpeed = " mph";
				tempDegree = "\u2109";
			}

			async function weather(city) {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}${units}`, { mode: 'cors' });
				const getData = await response.json();

				//fill content with values
				locationEle.innerText = getData.name;
				temperatureEle.innerText = Math.round(getData.main.temp) + " " + tempDegree;
				statusEle.innerText = getData.weather[0].description;
				dateEle.innerText = new Date().toDateString(); 
				windEle.innerText = Math.round(getData.wind.speed) + " " + windSpeed;
				humidityEle.innerText = getData.main.humidity + "%";
				feelsLikeEle.innerText = Math.round(getData.main.feels_like) + " " + tempDegree
	
				//call giphy api using weather
				let description = getData.weather[0].description.split(' ').join('+');

				async function gif(description) {
					const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${description}`, { mode: 'cors' });
					const getGifData = await response.json();
					weatherGif.src = getGifData.data.images.original.webp;
				}
				gif(description);
			}
			weather(city);
			loader.style.display = 'none';
		};
		
	return {
		currentWeather,
	}
	
	})();

	citySearchForm.addEventListener('submit', (e) => {
		const citySearchEle = document.querySelector('[data-city-search]');
		e.preventDefault();
		const city = citySearchEle.value;
		
		if (city === '') {
			return;
		} else {
			loader.style.display = 'flex';
			getCurrentWeather.currentWeather(city);
		}
	});
}


export default getWeather;
