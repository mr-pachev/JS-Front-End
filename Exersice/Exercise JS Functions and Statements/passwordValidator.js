function passwordValidator(text) {
  let isValid = true;

  function checkLength(text) {
    return text.length >= 6 && text.length <= 10;
  }

  function isLettersAndDigits(text) {
    let regex = /^[A-Za-z0-9]+$/g;
    return regex.test(text);
  }

  function isValidCountDigits(text) {
    let countDigits = 0;

    for (const el of text) {
      if (/^\d+$/.test(el)) {
        countDigits++;
      }
    }

    return countDigits >= 2;
  }

  if (!checkLength(text)) {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isLettersAndDigits(text)) {
    isValid = false;
    console.log("Password must consist only of letters and digits");
  }

  if (!isValidCountDigits(text)) {
    isValid = false;
    console.log("Password must have at least 2 digits");
  }

  if (isValid) {
    console.log("Password is valid");
  }
}

passwordValidator("Pa$s$s");
