function solve(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }

    print() {
      console.log(`${this.name}`);
    }
  }

  let countSong = input[0];
  let typeSong = input[input.length - 1];

  for (let el = 1; el <= countSong; el++) {
    let song = input[el];
    let typeList = song.split('_')[0];
    let name = song.split('_')[1];
    let time = song.split('_')[2];

    let currentSong = new Song(typeList, name, time);

    if (countSong.typeList === typeSong) {
      currentSong.print();
    }
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
