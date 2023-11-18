function solve(input) {
  for (const iterator of input) {
    let [name, latitude, longitude] = iterator.split(" | ");

    let townData = {
      town: name,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(townData);
  }
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
