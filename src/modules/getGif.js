import interfaceDOM from './interfaceDOM.js';
// import getWeather from './getWeather.js';
const GIPHY_API_KEY= process.env.GIPHY_API_KEY;

document.addEventListener('DOMContentLoaded', interfaceDOM);
// document.addEventListener('DOMContentLoaded', getWeather);


// https://api.giphy.com/v1/gifs/search?api_key=8WoOanNYllnHNjv6c48dgGJpqwGdGqCp&q=cloudy&limit=25&offset=0&rating=g&lang=en

function getGif() {

	// create an IIFE for getting Gif
	const getWeatherGif =  (() => {
		//get weather gif from Giphy API
		const weatherGif = (weather) => {
			async function gif(weather) {
				const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=cloudy&limit=1&offset=0&rating=g&lang=en`, { mode: 'cors' });
				const getData = await response.json();
				console.log(getData);
			}
			gif(weather);
		};
		
	return {
		weatherGif,
	}

	})();

	getWeatherGif.weatherGif();
	
}


export default getGif;
