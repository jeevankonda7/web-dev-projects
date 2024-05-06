const apikey = "a94a5a6366df7883f8f5c5f6d0274c60";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl+ city +`&appid=${apikey}`);
    var data = await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } else {
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML = data.wind.speed+"km/h";
    var weatherdata = data.weather[0].main;
    
    if(weatherdata=='Clouds'){
        weatherIcon.src="images/clouds.png";
    }
    else if(weatherdata=='Clear'){
        weatherIcon.src='images/Clear.png';
    }
    else if(weatherdata=='Rain'){
        weatherIcon.src='images/rain.png';
    }
    else if(weatherdata=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(weatherdata=='Mist'){
        weatherIcon.src='images/mist.png';
    }

    document.querySelector(".error").style.display="none";
    document.querySelector('.weather').style.display="block";

  }

}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})


