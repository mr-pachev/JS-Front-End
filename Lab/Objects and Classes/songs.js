function solve(input) {
  class Song {                                          //създаване на клас
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }

    print() {                                           //метод за прентиране в класа
      console.log(`${this.name}`);
    }
  }
  let compilation = [];                                 //масив, който ще съдържа класове - песен

  let countSong = input[0];                             //броя песни подадени от входа
  let typeSong = input[input.length - 1];               //последния елемент от масива подадуен от входа

  for (let el = 1; el <= countSong; el++) {
    let song = input[el];                               //текущата песен от входния масив
    let typeList = song.split("_")[0];
    let name = song.split("_")[1];
    let time = song.split("_")[2];

    let currentSong = new Song(typeList, name, time);   //обект с дадените полета

    compilation.push(currentSong);                      //пълнена на масива с класове
  }

  for (const iterator of compilation) {
    if (typeSong === "all") {                           //проверака какво е зададено от входа
      iterator.print();
    } else if (typeSong === iterator.typeList) {
      iterator.print();
    }
  }
}

solve([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
