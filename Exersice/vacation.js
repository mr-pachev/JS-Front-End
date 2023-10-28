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
            break;
        case "Business":
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
            break;

        
    }
}