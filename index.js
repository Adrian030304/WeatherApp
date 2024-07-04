//weather app

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card")
const apiKey = "e4f487901b6fa553bee9b703001ccc97"

weatherForm.addEventListener("submit", async event => {

    //folosim prevent default ca sa prevenim refresh - ul paginii , acesta fiind un lucru defaul al form
    event.preventDefault();

    const city = cityInput.value

    if(city){
        try {
            //we wait for the function to return the weather data 
            const weatherData = await getWeatherData(city)

            
            //once we receive it, we call the displayweather function and pass along the above varuable
            displayWeatherInfo(weatherData)


        } catch (error) {
            console.error(error);
            displayError(error)
        }
    }else{
        displayError("Please enter a city")
    }

});

async function getWeatherData(city){

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")

    card.textContent = "";
    card.style.display = "flex"
    card.appendChild(errorDisplay)

}