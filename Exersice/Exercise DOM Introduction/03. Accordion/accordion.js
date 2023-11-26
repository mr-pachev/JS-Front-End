function toggle() {
    let buttonContent = document.getElementsByClassName('button')[0].textContent;
    
    if (buttonContent === 'More'){
        document.getElementById('extra').style.display = 'inline';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }else if(buttonContent){
        document.getElementById('extra').style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }
}