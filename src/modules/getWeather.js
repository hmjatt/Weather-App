import interfaceDOM from './interfaceDOM';

document.addEventListener('DOMContentLoaded', interfaceDOM);


function getWeather() {

	// create an IIFE for appLogic
	const getCurrentWeather =  (() => {
		//get current weather from openweathermap API
		const currentWeather = (city) => {
			async function getWeatherNow(city) {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=apiKey`, { mode: 'cors' });
				const getData = await response.json();
				console.log(getData)
			}
			getWeatherNow(city);
		};
		
	return {
		currentWeather,
	}

	})();

	citySearchForm.addEventListener('submit', (e) => {
		const citySearchEle = document.querySelector('[data-city-search]');
		e.preventDefault();
		const city = citySearchEle.value;
		getCurrentWeather.currentWeather(city);
	});
	
}

export default getWeather;
