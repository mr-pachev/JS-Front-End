function solve(name, area, population, country, postcode) {
  let cityInfo = {
    name,
    area,
    population,
    country,
    postcode,
  };

  const city = Object.keys(cityInfo);

  for (const key of city) {
    console.log(`${key} -> ${cityInfo[key]}`);
  }
}

solve({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
