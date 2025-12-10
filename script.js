const apikey = "4beaca7cbb90efc054aeb77958dc6c14";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherimg = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";

        if(data.weather[0].main == "Clouds") weatherimg.src = "images/clouds.png";
        else if(data.weather[0].main == "Rain") weatherimg.src = "images/rain.png";
        else if(data.weather[0].main == "Drizzle") weatherimg.src = "images/drizzle.png";
        else if(data.weather[0].main == "Mist") weatherimg.src = "images/mist.png";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
