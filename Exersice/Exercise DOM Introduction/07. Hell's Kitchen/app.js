function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = document.querySelector("#inputs textarea");
    let arr = JSON.parse(input.value);

    arr = arr.filter(function (str) {
      return str.trim() !== "";                             // проверява дали стрингът след използването на trim() не е празен
    });

    for (const iterator of arr) {                           //премахва новите редове
      arr = arr.map(function (iterator) {
        return iterator.trimStart().trimEnd();
      });
    }

    for (const iterator of arr) {                           //премахване на елемента ','
      if (iterator === ",") {
        let index = arr.indexOf(iterator);
        arr.splice(index, 1);
      }
    } 

    pizzaArr = [];                                          //масив с пицариите, като обекти

    for (const iterator of arr) {                           //обхожда пицариите от входа
      let pizzaName = iterator.split(" - ")[0];             //взима името на пицарията
      let currentPizza = new Map();                         //текущата пицария, като map

      currentPizza.set("pizzaName", pizzaName);
      let employeeData = iterator.split(" - ")[1];          //взима имената на служителите, като string

      let countEmployees = 0;
      let avgSalary = 0;
      let sumSalary = 0;
      let bestSalary = 0;
      let workersArr = [];

      for (const worker of employeeData.split(", ")) {      //обхожда всяка пицария от входа
        countEmployees++;

        let workerMap = new Map();                          //map съдържащ информацията за всеки служител: име и заплата
        let workerName = worker.split(" ")[0];
        let workerSalary = Number(worker.split(" ")[1]);

        if (bestSalary < workerSalary) {                    //взима най-голямата заплата
          bestSalary = workerSalary.toFixed(2);
        }
             
        sumSalary += workerSalary;
        workerMap.set("workerName", workerName);
        workerMap.set("workerSalary", workerSalary);
        let tempSalary = 0;
        for (const iterator of workerMap) {
          if(workerMap.get('workerSalary') === bestSalary){
            workerMap.set("workerName", workerName);
            workerMap.set("workerSalary", workerSalary);
          }else if (workerMap.get('workerSalary') >= tempSalary){
            tempSalary = workerMap.get('workerSalary');
          }

        workersArr.push(workerMap);
      }
      avgSalary = sumSalary / countEmployees;
      avgSalary = avgSalary.toFixed(2);                     //сумата се показва до втория знак
      
      currentPizza.set("avgSalary", avgSalary);
      currentPizza.set("bestSalary", bestSalary);
      currentPizza.set("employees", workersArr);
      pizzaArr.push(currentPizza);
    }

    let bestPizza = {};
    let maxAvgSalary = 0;

    for (const iterator of pizzaArr) {                      //взима пицарията с най-голяма средна заплата
      if (maxAvgSalary < iterator.get("avgSalary")) {
        maxAvgSalary = iterator.get("avgSalary");
        bestPizza = iterator;
      }
    }

   document.querySelector("#bestRestaurant>p").textContent = `Name: ${bestPizza.get("pizzaName")} Average Salary: ${bestPizza.get("avgSalary")} Best Salary: ${bestPizza.get("bestSalary")}`;

   let emplObj = bestPizza.get("employees");                //взима най-добрата пицария, като обект

    for (const index in emplObj) {

      let emplName = emplObj[index].get("workerName");
      let emplSalary = emplObj[index].get("workerSalary");

      document.querySelector("#workers p").textContent += `Name: ${emplName} With Salary: ${emplSalary} `;
    }
  }
}
