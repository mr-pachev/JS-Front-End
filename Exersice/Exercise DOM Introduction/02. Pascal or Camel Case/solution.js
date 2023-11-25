function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;

  let textArr = text.split(" ");

  for (const iterator of textArr) {
    let currentWord = iterator.toLowerCase(); //текущата дума

    let firstChat = currentWord.charCodeAt()[0];
    console.log(firstChat);
  }
}
