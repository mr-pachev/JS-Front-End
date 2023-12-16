function solve(input) {
  const n = input.shift();

  let astronauts = [];

  for (let i = 0; i < n; i++) {
    const [name, oxygen, energy] = input.shift().split(" ");                    //сплитване входните данни от всеки ред в масив
    astronauts.push({ name, oxygen: Number(oxygen), energy: Number(energy) });  //всеки масива от реда се добавя, като нов обект в масива
  }

  let inputLine = input.shift();                      //взимане на следващия ред
  let command = inputLine.split(" - ")[0];            //сплитва реда, като елементи с индекси и взима командата

  while (command !== "End") {
    let name = inputLine.split(" - ")[1];             //името

    if (command === "Explore") {
      const neededEnergy = inputLine.split(" - ")[2]; //нужната енергия за извършване на работата
      explore(name, neededEnergy);

    } else if (command === "Refuel") {
      const refAmount = inputLine.split(" - ")[2];    //нова енергия за астронавта
      refuel(name, refAmount);

    } else if (command === "Breathe") {
      const refOxygen = inputLine.split(" - ")[2];    //допълнително кислород за астронавта
      breathe(name, refOxygen);
    }

    inputLine = input.shift();                        //следващия реда с входни данни
    command = inputLine.split(" - ")[0];              //новата команда
  }

  //проверка наличието на енергия за извършване на задачата
  function explore(nameAstro, neededEnergy) {       
    for (const key in astronauts) {
      if (astronauts[key].name === nameAstro) {

        if (astronauts[key].energy >= neededEnergy) {
          astronauts[key].energy -= neededEnergy;
          console.log(
            `${nameAstro} has successfully explored a new area and now has ${astronauts[key].energy} energy!`
          );
        } else {
          console.log(`${nameAstro} does not have enough energy to explore!`);
        }
      }
    }
  }

  //зареждане с допълнителна енергия
  function refuel(nameAstro, refAmount) {
    for (const key in astronauts) {
      if (astronauts[key].name === nameAstro) {
        let result = astronauts[key].energy + Number(refAmount);

        if (result >= 200) {
          console.log(
            `${nameAstro} refueled their energy by ${
              200 - astronauts[key].energy
            }!`
          );
          astronauts[key].energy = 200;
        } else {
          astronauts[key].energy = result;
          console.log(`${nameAstro} refueled their energy by ${refAmount}!`);
        }
      }
    }
  }

  //зареждане с допълнителен кислород
  function breathe(nameAstro, refOxygen) {
    for (const key in astronauts) {
      if (astronauts[key].name === nameAstro) {
        let result = astronauts[key].oxygen + Number(refOxygen);

        if (result >= 100) {
          console.log(
            `${nameAstro} took a breath and recovered ${
              100 - astronauts[key].oxygen
            } oxygen!`
          );
          astronauts[key].oxygen = 100;
        } else {
          astronauts[key].oxygen = result;
          console.log(
            `${nameAstro} took a breath and recovered ${result} oxygen!`
          );
        }
      }
    }
  }

  astronauts.forEach(astronaut => {
    console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`);
  });

//   for (const key in astronauts) {
//     console.log(
//       `Astronaut: ${astronauts[key].name}, Oxygen: ${astronauts[key].oxygen}, Energy: ${astronauts[key].energy}`
//     );
//   }
}

solve([
  "4",
  "Alice 60 100",
  "Bob 40 80",
  "Charlie 70 150",
  "Dave 80 180",
  "Explore - Bob - 60",
  "Refuel - Alice - 30",
  "Breathe - Charlie - 50",
  "Refuel - Dave - 40",
  "Explore - Bob - 40",
  "Breathe - Charlie - 30",
  "Explore - Alice - 40",
  "End",
]);
