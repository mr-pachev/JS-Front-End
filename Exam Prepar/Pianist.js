function solve(input) {
  let n = input.shift();
  let pieceObj = {};

  for (let i = 0; i < n; i++) {
    const [piece, composer, key] = input.shift().split("|");
    pieceObj[piece] = { composer, key };
  }

  let lineInput = input.shift().split("|");
  let command = lineInput[0];

  while(command !== 'Stop'){
    let piece =lineInput[1];

    if (command === 'Add'){
        let composer = lineInput[2];
        let key = lineInput[3];
        addPiece(piece, composer, key)
    }else if (command === 'ChangeKey'){
        let newKey = lineInput[2];

        changeKey(piece, newKey)
    }else if (command === 'Remove'){
        removePiece(piece);
    }

    lineInput = input.shift().split("|");
    command = lineInput[0];
  }

  function addPiece(piece, composer, key) {
    if (!pieceObj.hasOwnProperty(piece)) {
        pieceObj[piece] = {composer, key };
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    } else {
      console.log(`${piece} is already in the collection!`);
    }
  }

  function changeKey(piece, newKey) {
    if (pieceObj.hasOwnProperty(piece)) {
    
      pieceObj[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  function removePiece(piece) {
    if (pieceObj.hasOwnProperty(piece)) {
      delete pieceObj[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  for (const [key, value] of Object.entries(pieceObj)) {
    console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`);
  }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  
  
  );
