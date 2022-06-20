import './style/styles.css';
import interfaceDOM from '../modules/interfaceDOM';
import getWeather from '../modules/getWeather';
// require('dotenv').config();



document.addEventListener('DOMContentLoaded', interfaceDOM);
document.addEventListener('DOMContentLoaded', getWeather);

require("dotenv").config();

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;

console.log(OPEN_WEATHER_API_KEY);

