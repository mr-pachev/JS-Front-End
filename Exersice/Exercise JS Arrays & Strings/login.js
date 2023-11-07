function solve(input) {
  let username = input[0].split("");
  let usernamePass = String(username.reverse().join(""));
  username = input[0];
  let atteptCount = 1;

  for (let index = 1; index < input.length; index++) {
    if (input[index] === usernamePass && atteptCount <= 4) {
      console.log(`User ${username} logged in.`);
      break;
    } else if (atteptCount < 4) {
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${username} blocked!`);
      break;
    }

    atteptCount++;
  }
}

solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
