function addItem() {
  const parentEl = Array.from(document.querySelector("article").children);

  const text = parentEl[2];
  const value = parentEl[4];

  let op = document.createElement("option");

  op.textContent = text.value;
  op.value = value.value;

  document.getElementById("menu").appendChild(op);
  parentEl[6].disabled = false; 
}
