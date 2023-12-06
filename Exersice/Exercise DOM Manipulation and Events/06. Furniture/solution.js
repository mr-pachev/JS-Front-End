function solve() {
  let generateBtn = document.querySelector("#exercise button");
  let tbodyTag = document.querySelector("tbody");

  generateBtn.addEventListener("click", createObj);

  function createObj() {
    let textarea = document.querySelector("textarea").value;
    let furnitureInfo = JSON.parse(textarea); //обект от входа

    for (const iterator of furnitureInfo) {
      //итерация по стойностите на обекта
      let img = iterator.img;
      let name = iterator.name;
      let price = iterator.price;
      let decFactor = iterator.decFactor;
      
      let trFurniture = document.createElement("tr");

      trFurniture.appendChild(creatTdImg(img));
      trFurniture.appendChild(creatTdName(name));
      trFurniture.appendChild(creatTdPrice(price));

      tbodyTag.appendChild(trFurniture);
      console.log(tbodyTag);
    }
  }

  function creatTdImg(img) {
    //създаване и добавяне на колона с картина в реда
    let tdImg = document.createElement("td");
    let pImg = document.createElement("p");

    let image = document.createElement("img");
    image.setAttribute("src", img);

    pImg.appendChild(image);
    tdImg.appendChild(pImg);
    return tdImg;
  }

  function creatTdName(name) {
    //създаване и добавяне на колона с името в реда
    let tdName = document.createElement("td");
    let pName = document.createElement("p");
    
    pName.textContent = name;
    tdName.appendChild(pName);
    return tdName;
  }

  function creatTdPrice(price) {
    //създаване и добавяне на колона с името в реда
    let tdPrice = document.createElement("td");
    let pPrice = document.createElement("p");
    
    pPrice.textContent = Number(price);
    tdPrice.appendChild(pPrice);
    return tdPrice;
  }
}
