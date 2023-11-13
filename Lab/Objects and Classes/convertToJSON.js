function solve(firstName, lastName, hairColor) {
  let object = {
    firstName,
    lastName,
    hairColor,
  };

  let jsonStr = JSON.stringify(object);
  console.log(jsonStr);
}

solve("George", "Jones", "Brown");
