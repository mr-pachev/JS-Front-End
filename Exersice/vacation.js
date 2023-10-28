function solve(countPeople, type, day){
    let tottalPrice = 0;
    let discountPrice = 0;

    switch(type){
        case "Students":
            if (day === "Friday"){
                tottalPrice = countPeople * 8.45;
            }else if (day === "Saturday"){
                tottalPrice = countPeople * 9.80;
            }else if (day === "Sunday"){
                tottalPrice = countPeople * 10.46;
            }

            if (countPeople >= 30){
                discountPrice = tottalPrice * 0.15;
                tottalPrice -= discountPrice;
            }
            break;
        case "Business":
            if (countPeople >= 100){
                countPeople -= 10;
            }

            if (day === "Friday"){
                tottalPrice = countPeople * 10.90;
            }else if (day === "Saturday"){
                tottalPrice = countPeople * 15.60;
            }else if (day === "Sunday"){
                tottalPrice = countPeople * 16;
            }

            break;
        case "Regular":
            if (day === "Friday"){
                tottalPrice = countPeople * 15;
            }else if (day === "Saturday"){
                tottalPrice = countPeople * 20;
            }else if (day === "Sunday"){
                tottalPrice = countPeople * 22.50;
            }

            if (countPeople >= 10 && countPeople <= 20){
                discountPrice = tottalPrice * 0.05;
                tottalPrice -= discountPrice;
            }
            break;
    }
    console.log`Total price: ${tottalPrice}`;
}