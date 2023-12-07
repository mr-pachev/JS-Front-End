function getInfo() {
    const stopId = document.querySelector('#stopId'); //номера на спирката от входа
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/:';

    fetch(`${stopId}${BASE_URL}`)
        .then(res => res.json)
        .then(result => {
            
        })
}