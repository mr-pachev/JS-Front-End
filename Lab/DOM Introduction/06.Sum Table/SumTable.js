function sumTable() {
  const nodeList = document.querySelectorAll("table tr");       //редовете от таблицата

  let sum = 0;
  for (let index = 1; index < nodeList.length; index++) {
    const tdInCurrentRow = nodeList[index].children;            //децата на всеки tr
    const currentSum = Number(tdInCurrentRow[1].textContent);   //съдържанието на последния td и превръщането му в число
    sum += currentSum;
  }

  document.getElementById('sum').textContent = sum;
}
