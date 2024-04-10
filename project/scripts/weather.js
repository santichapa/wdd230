const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
const maxTemp = document.querySelector("#max-temp")
const humidity = document.querySelector("#humidity")

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.95&units=metric&appid=3a9567149b9ba06b62251564ce5a7c07";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&units=metric&appid=3a9567149b9ba06b62251564ce5a7c07"

// fetch data
async function weatherFetch() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing
            displayWeather(data);
        } else {
            throw Error(await response.text()); 
        }    
    } catch (error) {
        console.log(error)
    }
}

weatherFetch();

// display data

async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.list); // testing
            displayForecast(data.list);
        } else {
            throw Error(await response.text()); 
        }    
    } catch (error) {
        console.log(error)
    }
}

forecastFetch();

function displayWeather(data) {
    currentTemp.innerHTML = data.main.temp.toFixed();
    windspeed.innerHTML = data.wind.speed;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    
    humidity.textContent = data.main.humidity;
    maxTemp.textContent = data.main.temp_max.toFixed();
}

function displayForecast(data) {
    for (let i = 0; i < 17; i += 8) {
        const day = data[i];

        const fig = document.createElement("figure");
        const caption = document.createElement("figcaption");
        const icon = document.createElement("img");
        
        icon.setAttribute("src", `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`);
        let desc = day.weather[0].description;
        icon.setAttribute("alt", desc)
        caption.textContent = `${getDayOfWeek(i/8)}, ${day.main.temp.toFixed()}° C, ${desc}`;
    
        const li = document.createElement("li");
        fig.appendChild(icon);
        fig.appendChild(caption);
        li.appendChild(fig);
        document.querySelector("#display-3d-forecast").appendChild(li);  
    }
}

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date * 1000).getDay();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return weekdays[date];
  }

  const wc = document.querySelector("#windchill");



function calculateWindchill(temp, wind) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16));
}


//  max temperature banner
const btn = document.getElementById("banner-button"); 

btn?.addEventListener("click", () => {
    if (btn != null) {
        document.querySelector(".banner").classList.add("hide");
        document.querySelector(".banner"). classList.toggle(".banner");
    }
});
