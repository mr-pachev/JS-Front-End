function solve(input) {

  const n = input.shift();

  let piecesArr = [];

  for (let i = 0; i < n; i++) {
    const [piece, composer, key] = input.shift().split("|");                    //сплитване входните данни от всеки ред в масив
    piecesArr.push({ piece: piece, composer: composer, key: key});  //всеки масива от реда се добавя, като нов обект в масива
  }

  let inputLine = input.shift().split('|');
  let command = inputLine[0];

  while(command !== 'Stop'){
    let currentPiece = inputLine[1];
    

    switch(command){
      case 'Add':
        let addComposer = inputLine[2];
        let addkey = inputLine[3];

        const piceObj = findByName(currentPiece) ; 

        if(!piceObj){
          piecesArr.push({ currentPiece, addComposer, addkey });

          console.log(`${currentPiece} by ${addComposer} in ${addkey} added to the collection!`)
        }else {
          console.log(`${currentPiece} is already in the collection!`);
        }


        break;
      case 'Remove':
        break;
      case 'ChangeKey':
        break;
    }

    inputLine = input.shift().split('|');
    command = inputLine[0];
  }

  function findByName(name){
    for (const obj of piecesArr) {
      if(obj.piece === name){
		    return obj;
	    }
    }
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
