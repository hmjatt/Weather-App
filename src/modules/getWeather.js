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

		// fetch('/weather', {
		// 	method: 'POST',
		// 	// headers: {
		// 	// 	'Content-Type': 'application/json',
		// 	// 	'Accept': 'application/json'
		// 	// },
		// 	body: JSON.stringify({
		// 		city: city,
		// 	})
		// }).then(res => res.json()).then(data => {
		// 	// getCurrentWeather.currentWeather(city);
		// 	console.log(data);

		// })

		// async function getWeatherNow(city) {
		// 	const response = await fetch('/weather', { 
		// 		mode: 'cors',
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'Accept': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			city: city,
		// 		})
		// 	}).catch(err => console.log(err));
		// 	const getData = await response.json();
		// 	console.log(getData);
		// }

		// getWeatherNow(city);

		// fetch('/weather', { 
		// 	mode: 'cors',
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		city: city,
		// 	})
		// }).then(res => res.json()).then(data => {console.log(data)}).catch(err => console.log(err));

		

		// const axios = require('axios');
		console.log('app works')
		
		


		
	});
	
}

export default getWeather;
