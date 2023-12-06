function solve() {
  let generateBtn = document.querySelector("#exercise button");
  let tbodyTag = document.querySelector("tbody");

  generateBtn.addEventListener("click", createObj);

  function createObj(e) {
    let textarea = document.querySelector("textarea").value;
    let furnitureInfo = JSON.parse(textarea); //обект от входа
  
    for (const iterator of furnitureInfo) {   //итерация по стойностите на обекта
      let img = iterator.img;
      let name = iterator.name;
      let price = iterator.price;
      let decFactor = iterator.decFactor;
      let trFurniture = document.createElement("tr");
      
      trFurniture.appendChild(creatTdImg(img));
      trFurniture.appendChild(creatTdName(name));

      tbodyTag.appendChild(trFurniture);
    }
  }

  function creatTdImg(img) {      //създаване и добавяне на колона с картина в реда
    let tdImg = document.createElement("td");
    let pImg = document.createElement("p");

    let image = document.createElement("img");
    image.setAttribute("src", img);

    pImg.appendChild(image);
    return tdImg.appendChild(pImg);
  }

  function creatTdName(name) {    //създаване и добавяне на колона с името в реда
    let tdName = document.createElement("td");
    let pName = document.createElement("p");

    pName.setAttribute('class', name)

    pName.textContent = name;
    return tdName.appendChild(pName);
  }
}
