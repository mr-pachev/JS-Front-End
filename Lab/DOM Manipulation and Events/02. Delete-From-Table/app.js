function deleteByEmail() {
  const inputEmail = document.querySelector('input[name="email"]');

  const listEmail = Array.from(document.querySelector('#customers tbody').children);

  for (const row of listEmail) {
    const selectedValue = row.children[1];	//взима стойността на реда

    
}

}
