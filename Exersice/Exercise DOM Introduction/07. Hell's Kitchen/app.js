function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = document.querySelector("#inputs textarea");
    let arr = JSON.parse(input.value);

    pizzaArr = [];                                            //масив с пицариите, като обекти

    for (const iterator of arr) {                             //обхожда пицариите от входа
      let pizzaName = iterator.split(" - ")[0];               //взима името на пицарията
      let currentPizza = new Map();                           //текущата пицария, като map
     
      let employeeData = iterator.split(" - ")[1];            //взима имената на служителите, като string

      let countEmployees = 0;
      let avgSalary = 0;
      let sumSalary = 0;
      let bestSalary = 0;
      let workersArr = [];

      let desired_object = pizzaArr.find(obj => obj.get('pizzaName') === pizzaName);  //пицарията, като обект със съвпадащо име от входа

      if (desired_object) {                                                           //проверка дали има повтарящо се име на пицария от входните данни

        currentPizza = desired_object;
        
        workersArr = desired_object.get('employees');                                 //взима масива със служителите на конкретната пицария
        countEmployees = currentPizza.get('employees').length;
        
        for (const worker of employeeData.split(", ")) {                              //обхожда всяка пицария от входа
            countEmployees++;

          let workerMap = new Map();                                                  //map съдържащ информацията за всеки служител: име и заплата
          let workerName = worker.split(" ")[0];
          let workerSalary = Number(worker.split(" ")[1]);
                          
          workerMap.set("workerName", workerName);
          workerMap.set("workerSalary", workerSalary);
        
          workersArr.push(workerMap);
        }

       for (const iterator of workersArr) {
          if (bestSalary < iterator.get('workerSalary')) {                               //взима най-голямата заплата
            bestSalary = iterator.get('workerSalary').toFixed(2);
          }
        sumSalary += iterator.get('workerSalary');
       }
        
        workersArr.sort ((a, b) => b.get('workerSalary') - a.get('workerSalary'));       //сортиране на масива с работници и техните заплати по низходящ ред
      
        avgSalary = sumSalary / countEmployees;
        avgSalary = avgSalary.toFixed(2);                                               //сумата се показва до втория знак
      
        currentPizza.set("avgSalary", avgSalary);
        currentPizza.set("bestSalary", bestSalary);
        currentPizza.set("employees", workersArr);
      
      } else {
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
                  
        workersArr.sort ((a, b) => b.get('workerSalary') - a.get('workerSalary'));        //сортиране на масива с работници и техните заплати по низходящ ред
        
        avgSalary = sumSalary / countEmployees;
        avgSalary = avgSalary.toFixed(2);                                                 //сумата се показва до втория знак
        
        currentPizza.set("avgSalary", avgSalary);
        currentPizza.set("bestSalary", bestSalary);
        currentPizza.set("employees", workersArr);
        pizzaArr.push(currentPizza);

      }

    }

    let bestPizza = {};
    let maxAvgSalary = 0
    console.log(pizzaArr)
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
