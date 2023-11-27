function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let arr = document.querySelector("#inputs textarea").value.split(/"(.*?)"/);

    arr = arr.filter(function (str) {
      return str.trim() !== ""; // проверява дали стрингът след използването на trim() не е празен
    });

    for (const iterator of arr) {
      //премахва новите редове
      arr = arr.map(function (iterator) {
        return iterator.trimStart().trimEnd();
      });
    }

    for (const iterator of arr) { //премахване на елемента ','
      if (iterator === ",") {
        let index = arr.indexOf(iterator);
        arr.splice(index, 1);
      }
    }


    console.log(arr);
  }
}
