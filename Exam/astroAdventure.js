function solve(input) {
  const n = input.shift();

  let astronauts = [];

  for (let i = 0; i < n; i++) {
    const [name, oxygen, energy] = input.shift().split(' ');
    astronauts.push({ name, oxygen: Number(oxygen), energy: Number(energy) });
  }

  let inputLine = input.shift();
  let command = inputLine.split(" - ")[0];

  while (command !== "End") {
    let name = inputLine.split(" - ")[1];

    if (command === "Explore") {
        const neededEnergy = inputLine.split(" - ")[2];
        explore(name, neededEnergy)
    } else if (command === "Refuel") {
    } else if (command === "Breathe") {
    }

    inputLine = input.shift();
    command = inputLine.split(" - ")[0];
  }

  function explore(nameAstro, neededEnergy) {
    const values = Object.values(astronauts);
    for (const { name, oxygen, energy} of values) {
        console.log(name)
    }
  }
}

solve([
  "3",
  "John 50 120",
  "Kate 80 180",
  "Rob 70 150",
  "Explore - John - 50",
  "Refuel - Kate - 30",
  "Breathe - Rob - 20",
  "End",
]);
