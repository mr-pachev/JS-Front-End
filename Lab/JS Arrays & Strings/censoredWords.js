function solve(text, word){;
    text = text.replaceAll(word, '*'.repeat(word.length));
    console.log(text);
}

solve ('Find the hidden word', 'hidden');