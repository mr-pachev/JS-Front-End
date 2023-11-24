function colorize() {
  const nodeList = document.querySelectorAll("tr:nth-child(even)");
  const listToArr = Array.from(nodeList);

  for (const el of listToArr) {
    el.style.background = "Teal";
  }
}
