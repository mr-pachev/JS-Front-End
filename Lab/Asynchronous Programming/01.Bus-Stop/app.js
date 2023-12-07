function getInfo() {
    const stopIdInput = document.querySelector('#stopId'); //номера на спирката от входа
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/:';
    const stopNameContainer = document.getAnimations('stopName'); //мястото за изписване името на сприката
    const busesContainer = document.getElementById('buses'); //мястото да изписване на инфото за автобусите
    const stopId = stopIdInput.value; //номера на спирката


    fetch(`${stopId}${BASE_URL}`)
        .then((res) => res.json())
        .then((result) => {
           const {name, buses} = result;
           console.log(name);
        })
        .catch((err) => {

        })
}