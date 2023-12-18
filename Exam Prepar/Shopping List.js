function solve(input){
    const inputProductsArr = input.shift().split("!");

    let inputLine = input.shift().split(" ");
    let command = inputLine[0];

    while(command !== 'Go Shopping!'){
        let item = inputLine[1];
        let findProd = inputProductsArr.find(pro => pro === item);

        switch(command){
            case 'Urgent':
                if(!findProd){
                    inputProductsArr.splice (0, 0, item); 
                }
                break;
            case 'Unnecessary':
                if(findProd){
                    let index = inputProductsArr.indexOf(item);
	                inputProductsArr.splice(index, 1);
                }
                break;
            case 'Correct':
                let newItem = inputLine[2];

                if(findProd){
                    let index = inputProductsArr.indexOf(item);
	                inputProductsArr[index] = newItem;
                }
                break;
            case 'Rearrange':
                if(findProd){
                    let index = inputProductsArr.indexOf(item);
	                inputProductsArr.splice(index, 1);
                    inputProductsArr.push(item);
                }
                break;
        }

        if (input.length-1 === 0){
            inputLine = input.shift();
            command = inputLine;
        }else {
            inputLine = input.shift().split(' ');
            command = inputLine[0];
        }
    }
    console.log(inputProductsArr.join(', '));

}

solve(["Milk!Pepper!Salt!Water!Banana",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);
