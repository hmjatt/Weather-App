if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

//we have access to api keys from inside our server by calling these lines
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

//setup our server
const express = require('express');

// 
// const router = express.Router();

// axios is a library that allows us to make HTTP requests
// const axios = require('axios')

//setup app
const app = express();

//what we want our app to use, this case its JSON(we are going to be sending result as JSON to our server)
// app.use(express.json());

//setup our static, which is inside public folder
// app.use(express.static('public'));

//setup our endpoint
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${OPEN_WEATHER_API_KEY}`;

// const getData = async (url) => {
// 	try {
// 		const response = await axios.get(url)
// 		const data = response.data
// 		//send data to client
// 		// response.send(data);
// 		console.log(data)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// getData(url)


app.get("/", (req, res) => {
	console.log("hello");
	res.send("Hello, World!");
});



// listen on port 3000
// app.listen(3000, () => {

// 	console.log('Server Started');


// })

app.listen(3000);

// module.exports = app;


// `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${OPEN_WEATHER_API_KEY}`