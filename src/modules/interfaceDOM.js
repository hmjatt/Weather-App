import wind from '../public/images/wind.svg';
import humidity from '../public/images/humidity.svg';
import feelsLike from '../public/images/feelsLike.svg';
import cloudy from '../public/images/cloudy.svg';


function interfaceDOM() {

	//cache the DOM
	const citySearchForm = document.getElementById('[citySearchForm]');
	const weatherGif = document.getElementById('weatherGif');
	const windImgEle = document.getElementById('wind');
	const humidityImgEle = document.getElementById('humidity');
	const feelsLikeImgEle = document.getElementById('feelsLike');
	const celsius = document.getElementById('celsius');
	const fahrenheit = document.getElementById('fahrenheit');
	const loaderELe = document.getElementById('loader');

	windImgEle.src = wind;
	humidityImgEle.src = humidity;
	feelsLikeImgEle.src = feelsLike;
	weatherGif.src = cloudy;

}


export default interfaceDOM;