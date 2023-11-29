function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = document.querySelector("#inputs textarea");
    let arr = JSON.parse(input.value);

    pizzaArr = [];                                          //масив с пицариите, като обекти

    for (const iterator of arr) {                           //обхожда пицариите от входа
      let pizzaName = iterator.split(" - ")[0];             //взима името на пицарията
      let currentPizza = new Map();                         //текущата пицария, като map
     
      let employeeData = iterator.split(" - ")[1];          //взима имената на служителите, като string

      let countEmployees = 0;
      let avgSalary = 0;
      let sumSalary = 0;
      let bestSalary = 0;
      let workersArr = [];

       if (currentPizza.get('pizzaName') === pizzaName){
        
        for (const worker of employeeData.split(", ")) {      //обхожда всяка пицария от входа
          countEmployees++;
  
          let index = arr.indexOf(workerMap);
          let workerMap = pizzaArr[index];                          //map съдържащ информацията за всеки служител: име и заплата
          let workerName = worker.split(" ")[0];
          let workerSalary = Number(worker.split(" ")[1]);
  
          // if (bestSalary < workerSalary) {                    //взима най-голямата заплата
          //   bestSalary = workerSalary.toFixed(2);
          // }
               
          // sumSalary += workerSalary;
          workerMap.set("workerName", workerName);
          workerMap.set("workerSalary", workerSalary);
        
          workersArr.push(workerMap);

          console.log(workersArr);
        }




      }else {
      currentPizza.set("pizzaName", pizzaName);

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
      
        workersArr.push(workerMap);
      }
    }
      //сортиране на масива с работници и техните заплати по низходящ ред
      workersArr.sort ((a, b) => b.get('workerSalary') - a.get('workerSalary'));
      
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
