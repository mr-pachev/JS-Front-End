function focused() {
  const input = Array.from(document.getElementsByTagName("input"));

  for (const div of input) {
    div.addEventListener("focus", functionFocus);
    div.addEventListener("blur", functionBlur);
  }

  function functionFocus(e) {
    let div = e.currentTarget.parentNode;

    div.classList.add("focused");
  }

  function functionBlur(e) {
    let div = e.currentTarget.parentNode;

    div.classList.remove("focused");
  }
}
