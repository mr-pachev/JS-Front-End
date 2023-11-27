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
      let currentPizza = new Map();

      currentPizza.set("pizzaName", pizzaName);
      let employeeData = iterator.split(" - ")[1];
      let countEmployees = 0;
      let avrSallary = 1;
      let sumSallary = 0;
      let bestSallary = 0;
      let workersArr = [];

      for (const worker of employeeData.split(", ")) {
        //обхожда всяка пицария от входа
        countEmployees++;

        let workerMap = new Map();
        let workerName = worker.split(" ")[0];
        let workerSallary = Number(worker.split(" ")[1]);

        if (bestSallary < workerSallary) {
          //взима най-голямата заплата
          bestSallary = workerSallary.toFixed(2);
        }
        sumSallary += workerSallary;
        workerMap.set("workerName", workerName);
        workerMap.set("workerSallary", workerSallary);
        workersArr.push(workerMap);
      }
      avrSallary = sumSallary / countEmployees;
      avrSallary = avrSallary.toFixed(2); //сумата се показва до втория знак
      currentPizza.set("avrSallary", avrSallary);
      currentPizza.set("bestSallary", bestSallary);
      currentPizza.set("employees", workersArr);
      pizzaArr.push(currentPizza);
    }

    let bestPizza = {};
    let maxAvrSallary = 0;
    for (const iterator of pizzaArr) {
      //взима пицарията с най-голяма средна заплата
      if (maxAvrSallary <= iterator.get("avrSallary")) {
        maxAvrSallary = iterator.get("avrSallary");
        bestPizza = iterator;
      }
    }

    document.querySelector(
      "#bestRestaurant>p"
    ).textContent = `Name: ${bestPizza.get(
      "pizzaName"
    )} Average Salary: ${bestPizza.get(
      "avrSallary"
    )} Best Salary: ${bestPizza.get("bestSallary")}`;

    let emplObj = bestPizza.get("employees");

    for (const index in emplObj) {
      //принтиране втора част
      let emplName = emplObj[index].get("workerName");
      let emplSallary = emplObj[index].get("workerSallary");
      document.querySelector(
         "#workers>p"
       ).textContent += `Name: ${emplName} With Salary: ${emplSallary}`;
    }
  }
}
