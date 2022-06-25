# Weather-App


![This is an image](https://github.com/hmjatt/hmjatt.github.io/blob/master/images/Weather%20App.jpg)


An Application that let's you search weather for a specific location and toggles between Fahrenheit or Celsius. This project is created to practice topics like JSON, API Keys(Secrets, and Security), Async & Await in JavaScript while using Webpack as a module bundler. App shows a random Gif based on current weather of location, Enjoy!!! 😃 . Feel free to reach me at [Twitter](https://twitter.com/hmjatt/)


[Live Preview](https://hmjatt.github.io/Weather-App/)


### Technologies Used

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>  &emsp;   <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a>  &emsp;   <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> &emsp; <a href="https://www.json.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg" alt="json" width="50" height="50"/> </a>  &emsp;  <a href="https://openweathermap.org/" target="_blank" rel="noreferrer"> <img src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_60x60.png" alt="openweatherapi" width="60" height="60"/> </a>


<a href="https://webpack.js.org/" target="_blank" rel="noreferrer"> <img style="margin-top:40px;" src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.svg" alt="webpack" width="180" height="100"/> </a>  &emsp;   <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"> <img style="margin-top:20px;" src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.svg" alt="npm" width="120" height="70"/> </a>


## Includes the following features/components:

    - Css Loader
    - Asset Resource Loader
	- Html Webpack Plugin
    - Source Maps
	- Open Weather API
	- Giphy API
	- Fetch API
	- Async & Await
	- Babel Loader
	- Webpack
	- Dotenv-webpack(NPM Module)


## Usage

Run Dev Server (Port 5500)

    ```
    npm install

    ```

    ```
    npx webpack --watch // Clientside

    ```

### Links to content that helped me with this project

1. The Odin Project
    - [Article](https://www.theodinproject.com/lessons/node-path-javascript-weather-app)
    - [Working With APIs](https://www.theodinproject.com/lessons/node-path-javascript-working-with-apis)
    - [JSON](https://www.theodinproject.com/lessons/node-path-javascript-json)
    - [Async & Await](https://www.theodinproject.com/lessons/node-path-javascript-async-and-await)

2. Design Inspiration
	- [Dribbble(Offdesignarea)](https://dribbble.com/shots/15661680-Weather-App)
	- [Dribbble(KhoaVu)](https://dribbble.com/shots/15138732-Weather-app)
	
3. Open Weather API
	- [Documentation](https://openweathermap.org/api)
	- [API Key](https://openweathermap.org/appid)

4. Webpack
	- [Documentation](https://webpack.js.org/concepts/)
	- [Babel Loader](https://webpack.js.org/loaders/babel-loader/#root)
	- [Asset Management](https://webpack.js.org/guides/asset-management/)
	- [Source Maps](https://webpack.js.org/configuration/devtool/)
	- [Html Webpack Plugin & Cleaning Dist Folder ](https://webpack.js.org/guides/output-management/)

5. YouTube
	- [Web Dev Simplified(Build a Weather App With JavaScript)](https://www.youtube.com/watch?v=QH2-TGUlwu4)
	- [James Q Quick(Securing API key)](https://www.youtube.com/watch?v=QH2-TGUlwu4)
	- [Laugh a Little :smile:](https://www.youtube.com/watch?v=QH2-TGUlwu4)

6. Dotenv-webpack(NPM module)
	- [Documentation/Package](https://www.npmjs.com/package/dotenv-webpack)

7. Fetch API
	- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

8. Giphy API
	- [Documentation](https://developers.giphy.com/docs/api#quick-start-guide)

9. CSS Loader
	- [Loading.io](https://loading.io/css/)
	
## Notes/Remarks

- I have secured the API key using environment variables created using Dotenv-webpack(NPM module). This is to prevent someone from abusing the API key. This is a security feature and adds a security layer to app. But API key is still visible in the dev tools. To secure an API properly, you should use a backend like ExpressJS.

- Fetched weather, specifically Wind Speed sometimes is inaccurate but it's coming from the API and is for educational/entertainment purposes only.

- Fetched Gif's are based on the weather of location and application fetches a random Gif according to weather fetched.

- Async & Await is a JavaScript feature that allows us to write asynchronous code in a synchronous manner. It is used to make our code more readable and easier to understand.

- I have used the Open Weather API to get the weather data. This is a free API that allows you to get the weather data for a specific location(view Documentation for details). This API has 60 requests per minute(1,000,000 requests per month) limit, view pricing information for more details.

- I have used the Giphy API to get the gifs for the weather. This is a free API that allows you to get the gifs for the weather. This API has 1,000 requests per day limit, view documentation for more details.

- As stated in the James Q Quick's video, securing an api with environment variables does add a security layer that hides API key. But there are ways around this and during a call to the API, your API key is passed as a query parameter. This means that the API key is visible in the source code in the browser(or POSTMAN).

- Using environment variables is appropriate for this project because it is a small project(no need to authenticate user for just checking the weather), API key is free and request quota is limited so someone can't abuse it. But if you were to use an API in a larger scale project(where a user needs to log in), you would need to use a more secure method of storing the API key. For example, you could use a database, JWT auth, Bcrypt Package or even a Back-end server as a wrapper as stated in James Q Quick's video to authenticate a user.

## Future Changes/Fixes

- Add a Dashboard

- Add Maps

#### Quote

    “Learning never exhausts the mind.”
    — Leonardo da Vinci
>  	
> :notebook_with_decorative_cover: :fountain_pen: :love_you_gesture:
