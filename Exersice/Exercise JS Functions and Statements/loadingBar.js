function loadingBar(num) {
  if (num === 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  } else {
    let number = num / 10;
    let percent = "%".repeat(number);
    let dot = ".".repeat(10 - number);

    console.log(`${num}% [${percent}${dot}]`);
    console.log("Still loading...");
  }
}

loadingBar(20);
