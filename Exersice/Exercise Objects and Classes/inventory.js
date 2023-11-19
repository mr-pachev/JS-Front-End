function solve(input) {
  let heroesArr = [];

  for (const iterator of input) {
    let [name, level, items] = iterator.split(" / ");
    let hero = {
      name,
      level: Number(level),
      items,
    };

    heroesArr.push(hero);
  }
  
  heroesArr.sort((a, b) => a.level - b.level);

  for (const iterator of heroesArr) {
    console.log(`Hero: ${iterator.name}`);
    console.log(`level => ${iterator.level}`);
    console.log(`items => ${iterator.items}`);
  }
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
