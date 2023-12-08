function solve() {
    const contentBox = document.getElementById('info');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let busStopId = 'depot';

    function depart() {
        document.getElementById('depart').disabled = true; 
        document.getElementById('arrive').disabled = false; 

        fetch(`${BASE_URL}${busStopId}`)
        .then((res) => res.json())
        .then((busStopInfo) => {
            const {name, next} = busStopInfo;
           
            contentBox.textContent = `Next stop ${name}`;
            busStopId = next;
        })
    }

    async function arrive() {
        departBtn.disabled = true; 
        arriveBtn.disabled = false; 
    }

    return {
        depart,
        arrive
    };
}

let result = solve();