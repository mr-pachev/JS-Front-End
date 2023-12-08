function solve() {
    const contentBox = document.getElementById('info');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let nextBusStopId = 'depot';
    let busStopName = '';

    function depart() {
        departBtn.disabled = true; 
        arriveBtn.disabled = false; 

        fetch(`${BASE_URL}${nextBusStopId}`)
        .then((res) => res.json())
        .then((busStopInfo) => {
            const {name, next} = busStopInfo;
            busStopName = name;
           
            contentBox.textContent = `Next stop ${name}`;
            nextBusStopId = next;
        })
        .catch(() => {
            departBtn.disabled = true; 
            arriveBtn.disabled = true; 
        })
        
    }

    async function arrive() {
        departBtn.disabled = false; 
        arriveBtn.disabled = true; 

        fetch(`${BASE_URL}${nextBusStopId}`)
        .then((res) => res.json())
        .then((busStopInfo) => {
            const {name, next} = busStopInfo;

            console.log(next);
           
            contentBox.textContent = `Arriving at ${busStopName}`;
            nextBusStopId = next;
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();