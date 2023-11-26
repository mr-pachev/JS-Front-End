function search() {
  let arrWords = Array.from(document.querySelectorAll("li"));
  let searchText = document.getElementById("searchText").value;
  let matchCount = 0;
  for (const word of arrWords) {
    if (word.textContent.includes(searchText)) {
      matchCount++;
      word.style.textDecoration = "underline";
      word.style.fontWeight = "bold";
    }
  }
}
