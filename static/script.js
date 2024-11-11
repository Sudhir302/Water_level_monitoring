// let water_level = document.querySelector('p');
// let water_percent = document.querySelector('.water');

// const socket = io();


// socket.on('waterLevel', (level) => {
//     let new_waterLvl = parseInt(level, 10);

//     water_level.textContent = new_waterLvl + "%";
//     water_percent.style.height = new_waterLvl + "%";
// });




// weather API integration from openweathermap

const api_key = 'fadfd1939987f7a664b6d534906b85ec';
const form = document.querySelector('form');
let searched = document.querySelector('#search');

const degree = document.querySelector('#degree');

const getWeather = async(city) =>{
    degree.textContent = "...";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
    
    const data = await response.json();
    console.log(data)
    if(data.cod == "404"){
        degree.textContent = "404";
        return;
    }
    degree.textContent = data.main.temp + "ºC"
}

form.addEventListener("submit", (event)=>{
    getWeather(searched.value);
    event.preventDefault();
})