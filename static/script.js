// let water_level = document.querySelector('p');
// let water_percent = document.querySelector('.water')
// let new_waterLvl = prompt("Enter your % lvl of water: ");


// water_level.textContent = new_waterLvl + "%";

// water_percent.style.height = new_waterLvl +"%";



let water_level = document.querySelector('p');
let water_percent = document.querySelector('.water');

const socket = io();


socket.on('waterLevel', (level) => {
    let new_waterLvl = parseInt(level, 10);

    water_level.textContent = new_waterLvl + "%";
    water_percent.style.height = new_waterLvl + "%";
});
