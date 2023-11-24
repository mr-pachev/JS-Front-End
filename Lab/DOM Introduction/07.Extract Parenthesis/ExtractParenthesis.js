function extract(content) {
  const con = document.getElementById("content").textContent;       //взима съдържанието на тага с id=content
  const reg = /\((.+?)\)/g;

  let matching = reg.exec(con);
  let matchingText = "";

  while (matching !== null) {                                       //проверка докато има съвпадение
    matchingText += matching[1] + "; ";
    matching = reg.exec(con);                                       //прилагане на проверка за всяка часто от текста
  }
  return (document.getElementById("content").textContent = matchingText);
}
