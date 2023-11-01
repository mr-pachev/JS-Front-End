function solve(speed,area){
    let statusSpeed = "";

    switch(area){
        case "residential":
            if(speed <= 20){
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }else {
                let diff = speed - 20;

                if(diff <= 20){
                    statusSpeed = "speeding";
                }else if (diff <= 40){
                    statusSpeed = "excessive speeding";
                }else {
                    statusSpeed = "reckless driving";
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - ${statusSpeed}`);
            }
            break;
    
        case "city":
            if(speed <= 50){
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }else {
                let diff = speed - 50;

                if(diff <= 20){
                    statusSpeed = "speeding";
                }else if (diff <= 40){
                    statusSpeed = "excessive speeding";
                }else {
                    statusSpeed = "reckless driving";
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - ${statusSpeed}`);
            }
            break;
    
        case "interstate":
            if(speed <= 90){
                console.log(`Driving ${speed} km/h in a 90 zone`);
            }else {
                let diff = speed - 90;

                if(diff <= 20){
                    statusSpeed = "speeding";
                }else if (diff <= 40){
                    statusSpeed = "excessive speeding";
                }else {
                    statusSpeed = "reckless driving";
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - ${statusSpeed}`);
            }
            break;
    
        case "motorway":
            if(speed === 130){
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }else {
                let diff = speed - 130;

                if(diff <= 20){
                    statusSpeed = "speeding";
                }else if (diff <= 40){
                    statusSpeed = "excessive speeding";
                }else {
                    statusSpeed = "reckless driving";
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - ${statusSpeed}`);
            }
            break;
    }
}
    solve (200, "motorway");