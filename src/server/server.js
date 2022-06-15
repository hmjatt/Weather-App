if(process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

//we have access to api keys from inside our server by calling these lines
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
//setup our server
const express = require('express');
//setup app
const app = express();

//what we want our app to use, this case its JSON(we are going to be sending result as JSON to our server)
app.use(express.json());
//setup our static, which is inside public folder
app.use(express.static('public'));

//setup our endpoint
app.post('/weather', (req, res) => {
	
});
