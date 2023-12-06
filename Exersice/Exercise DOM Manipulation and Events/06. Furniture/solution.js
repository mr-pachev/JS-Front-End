function solve() {
  let generateBtn = document.querySelector("#exercise button");
  let bayBtn = document.querySelectorAll('#exercise button')[1];

  let tbodyTag = document.querySelector("tbody");

  generateBtn.addEventListener("click", createObj);
  bayBtn.addEventListener("click", buy);

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
      trFurniture.appendChild(creatTdDecFactor(decFactor));
      trFurniture.appendChild(creatCheckBox());

      tbodyTag.appendChild(trFurniture);
    }
  }

  function buy(){
    let checked = Array.from(document.querySelectorAll('tbody input'));
    let buyFurnitures = [];
    let allPrice = 0;
    
    for (const iterator of checked) {
      if(iterator.checked){
        let tr = iterator.parentElement.parentElement;
        let tdArr = Array.from(tr.children);
        let name = tdArr[1].textContent
        let price = Number(tdArr[2].textContent).toFixed(2);
        let decFactor = Number(tdArr[3].textContent);
       
        buyFurnitures.push(name);
        allPrice += price;
      }
    }

    console.log(allPrice);
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
    //създаване и добавяне на колона с цената в реда
    let tdPrice = document.createElement("td");
    let pPrice = document.createElement("p");
    
    pPrice.textContent = Number(price);
    tdPrice.appendChild(pPrice);
    return tdPrice;
  }

  function creatTdDecFactor(decFactor) {
    //създаване и добавяне на колона с цената в реда
    let tdDecFactor = document.createElement("td");
    let pDecFactor = document.createElement("p");
    
    pDecFactor.textContent = Number(decFactor);
    tdDecFactor.appendChild(pDecFactor);
    return tdDecFactor;
  }

  function creatCheckBox() {
    //създаване и добавяне на колона с checkBox в реда
    let tdCheckBox = document.createElement("td");
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');    
    
    tdCheckBox.appendChild(checkBox);
    return tdCheckBox;
  }
}
