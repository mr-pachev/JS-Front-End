function solve(input) {
  let meetings = {};

  for (const line of input) {
    let day = line.split(" ")[0];
    let name = line.split(" ")[1];

    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
