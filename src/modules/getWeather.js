import interfaceDOM from './interfaceDOM';
// const express = require("express");
const axios = require('axios');

// const app = express();

document.addEventListener('DOMContentLoaded', interfaceDOM);


function getWeather() {

	// // create an IIFE for appLogic
	// const getCurrentWeather =  (() => {
	// 	//get current weather from openweathermap API
	// 	const currentWeather = (city) => {
	// 		async function getWeatherNow(city) {
	// 			// const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=apiKey`, { mode: 'cors' });
	// 			// const getData = await response.json();
	// 			console.log(getData)
	// 		}
	// 		getWeatherNow(city);
	// 	};
		
	// return {
	// 	currentWeather,
	// }

	// })();

	citySearchForm.addEventListener('submit', (e) => {
		const citySearchEle = document.querySelector('[data-city-search]');
		e.preventDefault();
		// server();
		const city = citySearchEle.value;
		if (city === '') {
			return;
		}




		
	});
	
}

export default getWeather;
