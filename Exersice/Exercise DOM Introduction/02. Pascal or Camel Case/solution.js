function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;

  let textArr = text.split(" ");

  let result = "";

  for (const iterator of textArr) {
    let currentWord = iterator.toLowerCase(); //текущата дума

    if (namingConvention === "Pascal Case") {
      let firstChat = currentWord.charAt().toUpperCase();
      result += firstChat + currentWord.slice(1);
    }
  }
  console.log(result);
}
