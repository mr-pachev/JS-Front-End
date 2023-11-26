function solve() {
  let textArea = document.getElementById("input").value; //входните данни
  let inputToArr = Array.from(textArea.split(".")); //масив от изречения
  let sentenceArr = [];

  let output = document.getElementById("output"); //полето за изход на данните

  let newParagraph = document.createElement("p"); //създаване на параграф
  let index = 0;

  for (const el of inputToArr) {
    index++;
    let newEl = "";

    if (el.length > 0) {
      if (index < inputToArr.length) {
        newEl = el + ".";
      } else {
        newEl = el;
      }
      sentenceArr.push(newEl);
    }
  }

  index = 0;

  for (const el of sentenceArr) {
    index++;
    if (index === 4) {
      index = 1;
      newParagraph = document.createElement("p");
    }
    newParagraph.textContent += el;
    output.appendChild(newParagraph);
  }
}
