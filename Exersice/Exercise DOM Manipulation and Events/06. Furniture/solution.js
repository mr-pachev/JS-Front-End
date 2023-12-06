function solve() {
  let generateBtn = document.querySelector("#exercise button");

  generateBtn.addEventListener("click", createObj);

  function createObj(e) {
    let textarea = document.querySelector("textarea").value;
    let furnitureInfo = JSON.parse(textarea); //обект от входа

    for (const iterator of furnitureInfo) {
      //итерация по стойностите на обекта
      let img = iterator.img;
      let name = iterator.name;
      let price = iterator.price;
      let decFactor = iterator.decFactor;
      let tbodyTag = document.querySelector("tbody");

      let trFurniture = document.createElement("tr");

      tbodyTag.appendChild(creatTdImg(img, trFurniture));
    }

    function creatTdImg(img, trFurniture) {
      let tdImg = document.createElement("td");
      let pImg = document.createElement("p");

      let image = document.createElement("img");
      image.setAttribute("src", img);

      pImg.appendChild(image);
      tdImg.appendChild(pImg);
      return trFurniture.appendChild(tdImg);
    }
  }
}
