function solve() {
  let textArea = document.getElementById("input").value;  //входните данни
  let sentenceArr = Array.from(textArea.split(" "));      //масив от изречения

  let output = document.getElementById("output");         //полето за изход на данните
  let sentencesCount = 0;

  let newParagraph = document.createElement("p");         //създаване на параграф

  for (const el of sentenceArr) {
    sentencesCount++;
    newParagraph.textContent += el;

    if (sentencesCount % 3 === 0) {
      newParagraph = document.createElement("p");
      sentencesCount = 0;
    }
  }
  output.appendChild(newParagraph);
}
