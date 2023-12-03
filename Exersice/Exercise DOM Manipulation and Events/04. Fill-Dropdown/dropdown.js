function addItem() {
  let text = document.getElementById("newItemText");
  let textValue = document.getElementById("newItemValue");
  let menu = document.getElementById("menu");

  let option = document.createElement("option");
  option.textContent = text.value;
  option.value = textValue.value;

  if (text.value !== "" && textValue.value !== "") {
    menu.appendChild(option);
  }

  text.value = "";
  textValue.value = "";
}
