function solve() {
  let generateBtn = document.querySelector("#exercise button");

  generateBtn.addEventListener("click", createObj);

  function createObj(e) {
    let textarea = document.querySelector("textarea").value;
    let furnitureInfo = JSON.parse(textarea);   //обект от входа
    

    for (const iterator of furnitureInfo) {     //итерация по стойностите на обекта
      let trFurniture = document.createElement('tr');  
      let tbodyTag = document.querySelector('tbody');
      tbodyTag.appendChild(trFurniture);
      


      let img = iterator.img;
      let name = iterator.name;
      let price = iterator.price;
      let decFactor = iterator.decFactor;

      console.log(img, name, price, decFactor);
    }
  }
}
