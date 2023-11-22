const elements = async (data) => {
    const container = document.querySelector(".container");
    container.innerHTML = ""
    
    const cityNameContainer = document.querySelector('.city-info');
    cityNameContainer.textContent = data.location.name + ", " + data.location.country;

    for(let i= 0; i < 5; i++) {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date();
        const dayOfTheWeek = weekdays[(date.getDay() + i) % 7];

        const card = document.createElement('div');
        card.classList.add("card");            
        if (i === 0) card.classList.add("main-card");
        container.appendChild(card);
                
        const initialContent = document.createElement('div');
        initialContent.classList.add("imgBx");
        card.appendChild(initialContent);
                    
        const cardImg = document.createElement('img');
        cardImg.src = data.forecast.forecastday[i].day.condition.icon;
        cardImg.alt = "Icon describing the following weather: " + data.forecast.forecastday[i].day.condition.text;
        initialContent.appendChild(cardImg);
  
        const contentBox = document.createElement("div");
        contentBox.classList.add("contentBx");
        card.appendChild(contentBox);
                
        const weekdayContent = document.createElement("h2");
        weekdayContent.innerHTML = dayOfTheWeek;
        contentBox.appendChild(weekdayContent);
                
        const tempDescription = document.createElement("h4");
        tempDescription.innerHTML = data.forecast.forecastday[i].day.condition.text;
        contentBox.appendChild(tempDescription);
                
        const currentTempBox = document.createElement("div");
        currentTempBox.classList.add("color");
        contentBox.appendChild(currentTempBox)
                
        const currentTempHeader = document.createElement("h3");
        currentTempHeader.innerHTML = "Temp:"
        currentTempBox.appendChild(currentTempHeader);
                
        const currentTemp = document.createElement("span");
        currentTemp.classList.add("current-temp");
        currentTemp.innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C";
        currentTempBox.appendChild(currentTemp);
            
        const minMax = document.createElement("div");
        minMax.classList.add("details");
        contentBox.appendChild(minMax);
            
        const minMaxTempHeader = document.createElement("h3");
        minMaxTempHeader.innerHTML = "More:"
        minMax.appendChild(minMaxTempHeader);
            
        const minTemp = document.createElement("span");
        minTemp.classList.add("min-temp")
        minTemp.innerHTML = data.forecast.forecastday[i].day.mintemp_c  + "°C";
        minMax.appendChild(minTemp);
            
        const maxTemp = document.createElement("span");
        maxTemp.classList.add("max-temp")
        maxTemp.innerHTML = data.forecast.forecastday[i].day.maxtemp_c + "°C";
        minMax.appendChild(maxTemp);
    }
}

export default elements;