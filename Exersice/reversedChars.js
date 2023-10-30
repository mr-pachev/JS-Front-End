function solve(input1, input2, input3) {
  let arr = [];
  let result = "";
  arr.push(input1);
  arr.push(input2);
  arr.push(input3);
  for (let i = arr.length - 1; i >= 0; i--){
    result += arr[i] + " ";
  }
  console.log(result);
}

solve("A", "B", "C");
