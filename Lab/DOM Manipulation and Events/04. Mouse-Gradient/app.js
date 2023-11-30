function attachGradientEvents() {
    const gradient = document.querySelector('#gradient');

    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    
    function gradientMove(e){
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);

        document.querySelector('#result').textContent = power + '%';
    }

    function gradientOut(){
        document.querySelector('#result').textContent = '';
    }
}