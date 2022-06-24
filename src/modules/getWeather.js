import interfaceDOM from './interfaceDOM.js';
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
const GIPHY_API_KEY= process.env.GIPHY_API_KEY;


document.addEventListener('DOMContentLoaded', interfaceDOM);



function getWeather() {

	// create an IIFE for appLogic
	const getCurrentWeather =  (() => {
		//get current wealet units = "";
		

		const currentWeather = (city) => {

			// const celsius = document.getElementById('celsius');
			// const fahrenheit = document.getElementById('fahrenheit');
			let units;

			if(celsius.checked) {
				units = "&units=metric";
			} else if(fahrenheit.checked) {
				units = "&units=imperial";
			}
			


			async function weather(city) {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}${units}`, { mode: 'cors' });
				const getData = await response.json();
				let description = getData.weather[0].description.split(' ').join('+');

				async function gif(description) {
					const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${description}&limit=1&offset=0&rating=g&lang=en`, { mode: 'cors' });
					const getGifData = await response.json();
					// console.log(getGifData.data[0].images);
					weatherGif.src = getGifData.data[0].images.original.webp;
				}
				gif(description);

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
