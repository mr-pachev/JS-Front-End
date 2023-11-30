function validate() {
  const inputEmail = document.getElementById("email");
  inputEmail.addEventListener("change", validate);

  const pattern = /[a-z]+@[a-z]+\.[a-z]{2,3}/g;

  function validate(e) {
    let input = e.currentTarget.value;
    let emailAddress = e.currentTarget;

    if (!pattern.test(input)) {
      emailAddress.classList.add("error");
    } else {
        emailAddress.classList.remove("error");
    }
  }
}
