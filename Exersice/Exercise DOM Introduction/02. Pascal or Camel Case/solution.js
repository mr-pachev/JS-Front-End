function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;

  let textArr = text.split(" ");

  let result = "";

  for (let index = 0; index < textArr.length; index++) {
    let currentWord = textArr[index].toLowerCase(); //текущата дума

    if (namingConvention === "Pascal Case") {
      let firstChart = currentWord.charAt().toUpperCase();
      result += firstChart + currentWord.slice(1);

    } else if (namingConvention === "Camel Case") {
      if (index === 0){
        firstChart = currentWord.charAt().toLowerCase();
      }else {
        firstChart = currentWord.charAt().toUpperCase();
      }
      result += firstChart + currentWord.slice(1);
    }else {
      result = "Error!";
    }
  }
  
  document.getElementById('result').textContent = result;
}
