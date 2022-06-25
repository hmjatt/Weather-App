import interfaceDOM from './interfaceDOM.js';
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
const GIPHY_API_KEY= process.env.GIPHY_API_KEY;

const locationEle = document.querySelector('[data-location]');
const temperatureEle = document.querySelector('[data-temperature]');
const statusEle = document.querySelector('[data-status]');
const dateEle = document.querySelector('[data-date]');
const precipitationEle = document.querySelector('[data-precipitation]');
const windEle = document.querySelector('[data-wind]');
const humidityEle = document.querySelector('[data-humidity]');


document.addEventListener('DOMContentLoaded', interfaceDOM);



function getWeather() {

	// create an IIFE for appLogic
	const getCurrentWeather =  (() => {
		//get current wealet units = "";
		

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
				console.log(getData, typeof(getData.main.temp));
				locationEle.innerText = getData.name;
				// let temps = getData.main.temp
				temperatureEle.innerText = Math.round(getData.main.feels_like) + tempDegree;
				statusEle.innerText = getData.weather[0].description;
				dateEle.innerText = new Date().toDateString();
				// precipitationEle.innerText = 
				windEle.innerText = Math.round(getData.wind.speed) + " " + windSpeed;
				humidityEle.innerText = getData.main.humidity + "%";

			


				//fill content with values



				//call giphy api using weather
				// let description = getData.weather[0].description.split(' ').join('+');

				// async function gif(description) {
				// 	const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${description}&limit=1&offset=0&rating=g&lang=en`, { mode: 'cors' });
				// 	const getGifData = await response.json();
				// 	// console.log(getGifData.data[0].images);
				// 	weatherGif.src = getGifData.data[0].images.original.webp;
				// }
				// gif(description);

			}
			weather(city);
		};
		
	return {
		currentWeather,
		// description,
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

			
			getCurrentWeather.currentWeather(city);
			// console.log("getting data from weather api and giphy api works");
		}

	});

	
}


export default getWeather;
