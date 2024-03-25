
function speedDetector(speedInput) {
 
    const speedLimit = 70;
    const perPoint = 5;  //every 5km/s above speed limit give one demerit point
    let response = "";

    if (speedInput >= 0 && speedInput <= 70) {
        response = "Ok";
    } else {
        const demeritPoints = Math.floor((speedInput - speedLimit) / perPoint);
        response = "Points: " + demeritPoints;
        if (demeritPoints >= 12) {
            response = "License suspended" + demeritPoints;
        }
    }
    
    return response; 
}

console.log(speedDetector(70)); 







