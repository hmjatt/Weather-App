import wind from '../public/images/wind.svg';
import humidity from '../public/images/humidity.svg';
import precipitation from '../public/images/precipitation.svg';
import cloudy from '../public/images/cloudy.svg';


function interfaceDOM() {



	//cache the DOM
	// const locationEle = document.querySelector('[data-location]');
	// const temperatureEle = document.querySelector('[data-temperature]');
	// const statusEle = document.querySelector('[data-status]');
	// const dateEle = document.querySelector('[data-date]');
	// const precipitationEle = document.querySelector('[data-precipitation]');
	// const windEle = document.querySelector('[data-wind]');
	// const humidityEle = document.querySelector('[data-humidity]');
	const citySearchForm = document.getElementById('[citySearchForm]');
	const weatherGif = document.getElementById('weatherGif');
	const windImgEle = document.getElementById('wind');
	const humidityImgEle = document.getElementById('humidity');
	const precipitaionImgEle = document.getElementById('precipitation');
	const celsius = document.getElementById('celsius');
	const fahrenheit = document.getElementById('fahrenheit');

	windImgEle.src = wind;
	humidityImgEle.src = humidity;
	precipitaionImgEle.src = precipitation;
	weatherGif.src = cloudy;

}


export default interfaceDOM;