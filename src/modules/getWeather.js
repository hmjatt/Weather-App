import interfaceDOM from './interfaceDOM';
// require("dotenv").config();
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;

document.addEventListener('DOMContentLoaded', interfaceDOM);


function getWeather() {

	// create an IIFE for appLogic
	const getCurrentWeather =  (() => {
		//get current weather from openweathermap API
		const currentWeather = (city) => {
			async function weather(city) {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`, { mode: 'cors' });
				const getData = await response.json();
				console.log(getData)
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
		const city = citySearchEle.value;
		if (city === '') {
			return;
		} else {
			// getCurrentWeather.currentWeather(city);
			console.log("getting data from weather api works");
		}

	});

	
}


export default getWeather;
