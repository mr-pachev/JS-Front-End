function solve() {
  let generateBtn = document.querySelector("#exercise button");

  generateBtn.addEventListener("click", createObj);

  function createObj(e) {
    let textarea = document.querySelector("textarea").value;
    let furnitureInfo = JSON.parse(textarea);   //обект от входа
    

    for (const iterator of furnitureInfo) {     //итерация по стойностите на обекта
      let img = iterator.img;
      let name = iterator.name;
      let price = iterator.price;
      let decFactor = iterator.decFactor;
      
      
      
      let tbodyTag = document.querySelector('tbody');
      let trFurniture = document.createElement('tr'); 
      
      let tdImg = document.createElement('td');
      let pImg = document.createElement('p');

      pImg.textContent = img;
     
      tdImg.appendChild(pImg);
      trFurniture.appendChild(tdImg);

      tbodyTag.appendChild(trFurniture);
      


      

      console.log(img, name, price, decFactor);
    }
  }
}
