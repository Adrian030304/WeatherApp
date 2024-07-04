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

    //we have to fetch the weather data

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    //will be using fetch to get the info
    const response = await fetch(apiUrl)
    //if the response is not okay
    if(!response.ok){
        throw new Error("Could not fetch weather data")
    }
    return await response.json()
}

function displayWeatherInfo(data) {

    const {name:city,
           main:{temp,humidity},
           weather:[{description,id}]} = data

    card.textContent = "" // we do this cuz if there is already text here we can reset it
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")
    const weatherEmoji = document.createElement("p")

    cityDisplay.textContent = city
    tempDisplay.textContent = `${(temp -273.15).toFixed(1)}°C`
    humidityDisplay.textContent = `Humidity : ${humidity}`
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id)

    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descriptionDisplay")
    weatherEmoji.classList.add("weatherEmoji")
    
    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)
    card.appendChild(weatherEmoji)
}

function getWeatherEmoji(weatherId){


    switch(true){
        case (weatherId >=200 && weatherId <300):
            return "🌩️"
    }

}

function displayError(message){

    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")

    card.textContent = "";
    card.style.display = "flex"
    card.appendChild(errorDisplay)

}