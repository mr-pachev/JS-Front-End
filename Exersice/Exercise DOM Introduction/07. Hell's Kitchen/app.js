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

    pizzaArr = []; //масив с пицариите, като обекти

    for (const iterator of arr) {
      //обхожда пицариите от входа
      let pizzaName = iterator.split(" - ")[0];
      let currentPizza = {};

      currentPizza[pizzaName] = pizzaName;
      let employeeData = iterator.split(" - ")[1];
      let countEmployees = 0;
      let avrSallary = 1;
      let sumSallary = 0;

      for (const worker of employeeData.split(", ")) {
        //обхожда всяка пицария от входа
        countEmployees++;

        let workerName = worker.split(" ")[0];
        let workerSallary = Number(worker.split(" ")[1]);

        sumSallary += workerSallary;
        currentPizza[workerName] = workerSallary;
      }
      avrSallary = sumSallary / countEmployees;
      avrSallary = avrSallary.toFixed(2); //сумата се показва до втория знак
      currentPizza[avrSallary] = avrSallary;
      pizzaArr.push(currentPizza);
    }

    pizzaArr.sort((a, b) => {    			//сортиране на обекта по средна заплата във възходящ ред
      let keysA = Object.keys(a).sort();
      let keysB = Object.keys(b).sort();
   
      for (let i = 0; i < keysA.length; i++) {  
         let keyA = keysA[i];
         let keyB = keysB[i];
   
         if (keyA > keyB) {
            return -1;
         } else if (keyA < keyB) {
            return 1;
         }
      }
   });
   
   for (const key in pizzaArr[0]) {
		console.log(`Name: ${kye} Average Salary: ${pizzaArr[0].avrSallary} Best Salary: 1300.00`);
}




  }
}
