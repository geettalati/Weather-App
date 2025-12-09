        const apikey = "4beaca7cbb90efc054aeb77958dc6c14";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";
        
        async function checkweather(){
            const response = await fetch(apiurl + `&appid=${apikey}`);
            var data = await response.json();
            console.log(data);
        }
        checkweather();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;