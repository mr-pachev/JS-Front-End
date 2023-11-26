function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let rows = Array.from(document.querySelectorAll("tbody tr"));
    let searchField = document.getElementById("searchField").value;

    for (const current of rows) {
      current.classList.remove("select");

      if (current.textContent.includes(searchField)) {
        current.classList.add("select");
      }
    }
  }
}
