// import icon from '../public/images/cloudy.svg';
import wind from '../public/images/wind.svg';
import humidity from '../public/images/humidity.svg';
import precipitation from '../public/images/precipitation.svg';


function interfaceDOM() {

	// const iconAttr = document.getElementById('icon');
	// iconAttr.src = icon;

	//cache the DOM
	const locationEle = document.querySelector('[data-location]');
	const temperatureEle = document.querySelector('[data-temperature]');
	const statusEle = document.querySelector('[data-status]');
	const dateEle = document.querySelector('[data-date]');
	const precipitationEle = document.querySelector('[data-precipitation]');
	const windEle = document.querySelector('[data-wind]');
	const humidityEle = document.querySelector('[data-humidity]');
	const citySearchForm = document.getElementById('[citySearchForm]');
	const weatherGif = document.getElementById('weatherGif');
	const windImgEle = document.getElementById('wind');
	const humidityImgEle = document.getElementById('humidity');
	const precipitaionImgEle = document.getElementById('precipitation');

	windImgEle.src = wind;
	humidityImgEle.src = humidity;
	precipitaionImgEle.src = precipitation;
	// const citySearchEle = document.querySelector('[data-city-search]');
}


export default interfaceDOM;