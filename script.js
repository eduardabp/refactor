import API from "./config.js";
import displayInfo from "./elements.js";

const button = document.querySelector('#submit-search');
const inputField = document.querySelector('#cityName');

const getWeatherData = async (location) => {
    const theNameOfTheCity = inputField.value;
    if (theNameOfTheCity.trim()) {
        try{
            return fetch("http://api.weatherapi.com/v1/forecast.json?key=" + API.key + "&q=" + theNameOfTheCity + "&days=7&aqi=no&alerts=no")
            .then(response => response.json())
            .then(data => { return data })
        } catch (error) {
            alert("Hey are you sure you are not holding up your map upside down?");
        }
    } else {
        alert("Please, fill the input field");
    }}


const startWeatherApp = async () => {
    const weatherInfo = await getWeatherData(inputField.value);
    displayInfo(weatherInfo);
}

button.addEventListener('click', startWeatherApp);
inputField.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        startWeatherApp();
    }
});


// This is a weather web application made for educational purposes. Please do not commercialize this project in any way whatsoever.
// Made by a BeCode technical coach whom had a lot of fun making "bad code", and improved by the very learners of this class.
// I want to mention that this is a fully working app, but can be optimized by: 
// cleaning up, 
// refactoring the code, 
// renaming the variables, 
// removing redundant code,
// removing unnecessary comments,
// storing information into variables for easier and more readable use 