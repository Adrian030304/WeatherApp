//weather app

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card")
const apiKey = "e4f487901b6fa553bee9b703001ccc97"

weatherForm.addEventListener("submit", event => {

    //folosim prevent default ca sa prevenim refresh - ul paginii , acesta fiind un lucru defaul al form
    event.preventDefault();

    const city = cityInput.value
    


});

async function getWeatherData(city){

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

}