import './style/styles.css';
import icon from './images/cloudy.png';
import getWeather from './getWeather.js';


const iconAttr = document.getElementById('icon');
iconAttr.src = icon;

document.addEventListener('DOMContentLoaded', getWeather);