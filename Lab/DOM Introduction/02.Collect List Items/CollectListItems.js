function extractText() {
  const list = document.getElementsByTagName("li");
  const elementsAsArray = Array.from(list);
  let arr = [];

  for (const el of elementsAsArray) {
    arr.push(el.textContent);
  }

  const textArea = document.getElementById("result");
  textArea.textContent = arr.join("\n");
}
