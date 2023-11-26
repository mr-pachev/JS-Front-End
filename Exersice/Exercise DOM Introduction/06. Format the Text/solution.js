function solve() {
  let textArea = document.getElementById("input").value; //входните данни
  let sentenceArr = Array.from(textArea.split(".")); //масив от изречения

  let output = document.getElementById("output"); //полето за изход на данните

  let newParagraph = document.createElement("p"); //създаване на параграф
  let index = 0;

  console.log(sentenceArr);

  for (const el of sentenceArr) {
    index++;
    console.log(index);
    newParagraph.textContent += el;
    console.log(newParagraph.textContent);

    if (index < 3) {
      newParagraph.textContent += ". ";
      output.appendChild(newParagraph);
    } else {
      newParagraph.textContent += ".";
      output.appendChild(newParagraph);
      index = 0;
      newParagraph = document.createElement("p");
    }
  }
}
