function solve (input){
    let n = input.shift();
    let pieceOBj = {};

   for (let i = 0; i < n; i++){
        const [piece, composer, key] = input.shift().split('|');
        pieceOBj[piece] =  {composer, key};
    }
   
    function addPiece(piece, composer, key){

    }

    function changeKey(piece, newKey){

    }

    function removeePiece(piece){

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