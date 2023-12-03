function create(words) {
  let divContent = document.getElementById("content"); //взимаме DOM елемента, в който ще вкарбаме съдържанието

  for (const word of words) { //обхожда всички думи от входа
    let div = document.createElement("div"); 
    let p = document.createElement("p");

    p.textContent = word; //пълним параграфа
    p.style.display = 'none';

    div.appendChild(p); //добавяме параграфа към div

    divContent.appendChild(div); //закачаме тага към DOM елемента

    div.addEventListener("click", onAddContent);

    function onAddContent() {
      p.style.display = 'block';
    }
  }
}
