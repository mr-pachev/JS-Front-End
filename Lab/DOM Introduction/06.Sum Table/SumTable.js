function sumTable() {
  const nodeList = document.querySelectorAll("tbody tr"); //редовете от таблицата

  for (let index = 1; index < nodeList.length; index++) {
    const tdArrInCurrentRow = nodeList[index].children;
    console.log(tdArrInCurrentRow[1]);
  }
}
