function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let arr = document.querySelector("#inputs textarea").value.split(/"(.*?)"/);

    arr = arr.filter(function (str) {
      return str.trim() !== ""; // проверява дали стрингът след използването на trim() не е празен
    });

    for (const iterator of arr) {
      //премахва новите редове
      arr = arr.map(function (iterator) {
        return iterator.trimStart().trimEnd();
      });
    }

    for (const iterator of arr) {
      //премахване на елемента ','
      if (iterator === ",") {
        let index = arr.indexOf(iterator);
        arr.splice(index, 1);
      }
    }

    pizzaArr = [];

    for (const iterator of arr) {
      let pizzaName = iterator.split(' - ')[0];

      pizzaArr[pizzaName] = pizzaName;
      let employeeData = iterator.split(' - ')[1];
      
      for (const worker of employeeData.split(', ')) {
         console.log(worker.split(' ')[0]);
      }
      
    }

    console.log(pizzaArr);
    
    
  }
}
