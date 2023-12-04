function encodeAndDecodeMessages() {
    let textFields = Array.from(document.getElementsByTagName('textarea'));
    let buttons = Array.from(document.getElementsByTagName('button'));

    let encodeText = textFields[0];     //некодиран текст
    let decodeText = textFields[1];     //кодиран текст

    let btnEncode = buttons[0];
    let btnDecode = buttons[1];

    btnEncode.addEventListener('click', encoded);

    function encoded(){                 //кодиране на текста
        let inputText = encodeText.value.split('');

        for (const char of inputText) {
            console.log(char.charCodeAt(0));
        }
    }
}