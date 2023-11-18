function solve(input) {
  for (const current of input) {
    console.log(`Name: ${current} -- Personal Number: ${current.length}`);
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
