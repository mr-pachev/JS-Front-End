function solve(input) {
  let meetings = {};                        //празен обект

  for (const line of input) {               //обхожда се масива
    let day = line.split(" ")[0];           //взима се ключ
    let name = line.split(" ")[1];          //Взима се стойност

    if (!meetings.hasOwnProperty(day)) {    //проверка дали ключа съществува в обекта
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  for (const key in meetings) {             //принтиране на обекта
    console.log(`${key} -> ${meetings[key]}`);
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
