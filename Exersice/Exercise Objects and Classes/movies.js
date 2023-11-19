function solve(input) {
  let moviesInfo = {};

  for (const row of input) {
    let arrRow = row.split(" ");
    if (arrRow.includes("addMovie")) {
      let name = arrRow.slice(1, arrRow.length).join(" ");
      moviesInfo[name] = name;
    }
  }
}

solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
