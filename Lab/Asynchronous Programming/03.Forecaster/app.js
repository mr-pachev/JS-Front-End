function attachEvents() {
    const inputLocation = document.querySelector('#request > #location').value;
    let BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';

    fetch(`${BASE_URL}${inputLocation}`)
    .then((res) => res.json())
    .then((locationInfo) => {
        const {name, forecast} = locationInfo;

        console.log(name);
    })
}

attachEvents();