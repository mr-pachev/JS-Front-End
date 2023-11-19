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

  for (const movie of moviesInfo) {             //обхождаме масива с обектите
    if (movie.date && movie.director) {         //проверка дали дадения обект има date и director
      console.log(JSON.stringify(movie));       //печатаме в JSON-формат
    }
  }
}

solve([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
