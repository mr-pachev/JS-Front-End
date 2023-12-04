function encodeAndDecodeMessages() {
  let textFields = Array.from(document.getElementsByTagName("textarea"));
  let buttons = Array.from(document.getElementsByTagName("button"));

  let encodeText = textFields[0]; //некодиран текст
  let decodeText = textFields[1]; //кодиран текст

  let btnEncode = buttons[0];
  let btnDecode = buttons[1];

  btnEncode.addEventListener("click", encoded);

  function encoded() {
    //кодиране на текста
    let inputText = encodeText.value.split("");
    let result = "";

    for (const char of inputText) {
      let ASCiiCode = char.charCodeAt(0) + 1;

      result += String.fromCharCode(ASCiiCode);
    }

    decodeText.value = result;
    encodeText.value = "";
  }

  btnDecode.addEventListener("click", decoded);

  function decoded() {
    //кодиране на текста
    let inputText = decodeText.value.split("");
    let result = "";

    for (const char of inputText) {
      let ASCiiCode = char.charCodeAt(0) - 1;

      result += String.fromCharCode(ASCiiCode);
    }

    encodeText.value = result;
    decodeText.value = "";
  }
}
