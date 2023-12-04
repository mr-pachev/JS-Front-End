function encodeAndDecodeMessages() {
    let encodeTextBox = document.getElementsByTagName('textarea');
    let encodeBtn = document.getElementsByTagName('button');

    let encodeText = encodeTextBox[0];     //некодиран текст
    let decodeText = encodeTextBox[1];     //кодиран текст

    let btnEncode = encodeBtn[0];
    let btnDecode = encodeBtn[1];

    btnEncode.addEventListener('click', encoded);
     btnDecode.addEventListener('click', decoded);

    function encoded(){                 //кодиране на текста
        
        let inputText = encodeText.value.split('');

        let result = '';

        for (const char of inputText) {
            let ASCiiCode = char.charCodeAt(0) + 1;

           result += String.fromCodePoint(ASCiiCode);
        }
        
        decodeText.value = result;
        encodeText.value = '';

        
    }

   
    function decoded(){                 //кодиране на текста
                
        let inputText = decodeText.value.split('');
        let result = '';


        for (const char of inputText) {
           let ASCiiCode = char.charCodeAt(0) - 1;

           result += String.fromCodePoint(ASCiiCode);
        }
        
        decodeText.value = result;
    }
}