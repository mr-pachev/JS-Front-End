function solve() {
    const contentBox = document.getElementById('info');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const busStopId = 'depot';

    function depart() {
        departBtn.disabled = false; 
        arriveBtn.disabled = true; 

        fetch(`${BASE_URL}${busStopId}`)
        .then((res) => res.json())
        .then((busStopInfo) => {
            const {name, next} = busStopInfo;
           
            contentBox.textContent = `Next stop ${stopName}`;
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