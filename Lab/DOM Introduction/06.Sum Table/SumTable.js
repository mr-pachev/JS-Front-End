function sumTable() {
  const nodeList = document.querySelectorAll("table tr"); //редовете от таблицата

  let sum = 0;
  for (let index = 1; index < nodeList.length; index++) {
    const tdInCurrentRow = nodeList[index].children;
    const currentSum = Number(tdInCurrentRow[1].textContent);
    sum += currentSum;
  }

  document.getElementById('sum').textContent = sum;
}
