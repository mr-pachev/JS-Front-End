function validate() {
    const inputEmail = document.getElementById('email');
    inputEmail.addEventListener('change', validate); 

    const pattern = /[a-z]+@[a-z]+\.[a-z]{2,3}/g;

    function validate(e){
        let emailAddress = e.currentTarget.value;

        if (!pattern.test(emailAddress)){
            let parent = e.currentTarget; 
            parent.classList.add('error');
        }
    }
}