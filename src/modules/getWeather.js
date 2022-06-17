import interfaceDOM from './interfaceDOM';

document.addEventListener('DOMContentLoaded', interfaceDOM);


function getWeather() {

	// create an IIFE for appLogic
	const getCurrentWeather =  (() => {
		//get current weather from openweathermap API
		const currentWeather = () => {
		console.log('getCurrentWeather');
	}

	return {
		currentWeather,
	}

	})();
	
	getCurrentWeather.currentWeather();
}

export default getWeather;
