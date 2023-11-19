function solve(input) {
  let moviesInfo = [];

  for (const row of input) {
    let arrRow = row.split(" "); //превръщаме реда в масив

    if (arrRow.includes("addMovie")) {
      let name = arrRow.slice(1, arrRow.length).join(" ");
      moviesInfo.push({ name: name });
    } else if (arrRow.includes("directedBy")) {
      let name = row.split(" directedBy ")[0];
      let director = row.split(" directedBy ")[1];

      let search = moviesInfo.find((el) => el.name === name);

      if (search) {
        search["director"] = director;
      }
    } else if (arrRow.includes("onDate")) {
      let name = row.split(" onDate ")[0];
      let date = row.split(" onDate ")[1];
      let search = moviesInfo.find((el) => el.name === name);

      if (search) {
        search["date"] = date;
      }
    }
  }

  let jsonStr = JSON.stringify(moviesInfo);
  console.log(jsonStr);
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
