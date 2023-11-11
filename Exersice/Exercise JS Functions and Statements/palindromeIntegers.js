function palindromeInt(arr) {
  function isPalindrome(currentNum) {
    currentNum = currentNum.toString();
    let reversNum = currentNum.toString().split("").reverse().join("");
    return reversNum === currentNum;
  }

  for (const currentNum of arr) {
    console.log(isPalindrome(currentNum));
  }
}

palindromeInt([123, 323, 421, 121]);
