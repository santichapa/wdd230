const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.76&lon=-58.43&units=metric&appid=3a9567149b9ba06b62251564ce5a7c07";
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing
            displayResults(data);
        } else {
            throw Error(await response.text()); 
        }    
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)} &degC`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}

