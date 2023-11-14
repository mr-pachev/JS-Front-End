function solve(input) {
  let meetings = {};

  for (const line of input) {
    let day = line.split(" ")[0];
    let name = line.split(" ")[1];

    meetings[day] = name;
  }

  for (const key in meetings) {
    if (meetings.hasOwnProperty(key)) {
      console.log(`Conflict on ${key}!`);
    } else {
      console.log(`Scheduled for ${key}`);
    }
  }
  for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
