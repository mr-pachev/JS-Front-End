function solve(input) {
  const n = input.shift();

  let astronauts = [];

  for (let i = 0; i < n; i++) {
    const [name, oxygen, energy] = input.shift().split(" ");
    astronauts.push({ name, oxygen: Number(oxygen), energy: Number(energy) });
  }

  let inputLine = input.shift();
  let command = inputLine.split(" - ")[0];

  while (command !== "End") {
    let name = inputLine.split(" - ")[1];

    if (command === "Explore") {
      const neededEnergy = inputLine.split(" - ")[2];
      explore(name, neededEnergy);
    } else if (command === "Refuel") {
      const refAmount = inputLine.split(" - ")[2];
      refuel(name, refAmount);
    } else if (command === "Breathe") {
      const refOxygen = inputLine.split(" - ")[2];
      breathe(name, refOxygen);
    }

    inputLine = input.shift();
    command = inputLine.split(" - ")[0];
  }

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

  function refuel(nameAstro, refAmount) {
    for (const key in astronauts) {
      if (astronauts[key].name === nameAstro) {
        let result = astronauts[key].energy + Number(refAmount);

        if (result > 200) {
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
