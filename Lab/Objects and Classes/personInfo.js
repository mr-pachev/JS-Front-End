function solve(firstName, lastName, age) {
  age = Number(age);
  let personalInfo = {
    firstName,
    lastName,
    age,
  };

  return personalInfo;
}

console.log(solve("Peter", "Pan", "20"));
