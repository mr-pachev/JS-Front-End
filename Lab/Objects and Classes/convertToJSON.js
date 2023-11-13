function solve(firstName, lastName, hairColor) {
  let object = {
    name: firstName,
    lastName,
    hairColor,
  };

  let jsonStr = JSON.stringify(object);
  console.log(jsonStr);
}

solve("George", "Jones", "Brown");
