const inputLocation = document.querySelector('#request > #location');
const buttonGetWeather = document.querySelector('#request > #submit');
let BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';

buttonGetWeather.addEventListener('click', attachEvents)

function attachEvents() {
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((locationInfo) => {
    
    let {code, name} = locationInfo;
        console.log(typeof code);
    })
    .catch((err) => {
        
    })
}


attachEvents();