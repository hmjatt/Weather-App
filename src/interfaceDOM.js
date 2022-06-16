import icon from './images/cloudy.png';


function interfaceDOM() {

	const iconAttr = document.getElementById('icon');
	iconAttr.src = icon;

	//cache the DOM
	const locationEle = document.querySelector('[data-location]');
	const temperatureEle = document.querySelector('[data-temperature]');
	const statusEle = document.querySelector('[data-status]');
	const dateEle = document.querySelector('[data-date]');
	const precipitationEle = document.querySelector('[data-precipitation]');
	const windEle = document.querySelector('[data-wind]');
	const humidityEle = document.querySelector('[data-humidity]');
	const citySearchEle = document.querySelector('[data-city-search]');
}


export default interfaceDOM;