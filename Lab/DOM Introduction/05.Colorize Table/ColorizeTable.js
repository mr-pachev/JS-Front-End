function colorize() {
  const nodeList = document.querySelectorAll("tr");
  const listToArr = Array.from(nodeList);
  
  for (let index = 0; index < listToArr.length; index++) {
    console.log(listToArr[index]);
  }
}
