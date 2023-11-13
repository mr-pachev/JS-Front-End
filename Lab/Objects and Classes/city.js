function solve(cityInfo) {
  const city = Object.entries(cityInfo);

  for (const [key, value] of city) {
    console.log(`${key} -> ${value}`);
  }
}

solve({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
