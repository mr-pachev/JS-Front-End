function deleteByEmail() {
  let inputEmail = document.querySelector('input[name="email"]');

  const listEmail = Array.from(
    document.querySelector("#customers tbody").children
  );

  for (const row of listEmail) {
    const selectedValue = row.children[1]; //взима стойността на реда

    let result = document.querySelector("#result");

    if (selectedValue.textContent === inputEmail.value) {
      row.remove();

      result.textContent = "Deleted.";
      inputEmail.value = "";
    } else {
      result.textContent = "Not found.";
    }
  }
}
