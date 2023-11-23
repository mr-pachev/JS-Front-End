function extractText() {
  console.log("here");
  const list = document.getElementsByTagName("li");
  const elementsAsArray = Array.from(list);

  for (const el of elementsAsArray) {
    console.log(el);
  }
}
