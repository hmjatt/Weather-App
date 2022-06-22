import interfaceDOM from './interfaceDOM.js';
import getGif from './getGif.js';
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;

document.addEventListener('DOMContentLoaded', interfaceDOM);
// document.addEventListener('DOMContentLoaded', getGif);



function getWeather() {

	// create an IIFE for appLogic
	const getCurrentWeather =  (() => {
		//get current weather from openweathermap API
		const currentWeather = (city) => {
			async function weather(city) {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`, { mode: 'cors' });
				const getData = await response.json();
				console.log(getData);
			}
			weather(city);
		};
		
	return {
		currentWeather,
	}

	})();

	citySearchForm.addEventListener('submit', (e) => {
		const citySearchEle = document.querySelector('[data-city-search]');
		e.preventDefault();
		// getGif();
		const city = citySearchEle.value;
		if (city === '') {
			return;
		} else {
			// getCurrentWeather.currentWeather(city);
			// getGif();
			// getWeatherGif.weatherGif();
			console.log("getting data from weather api and giphy api works");
		}

	});

	
}


export default getWeather;
