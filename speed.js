function speedDetector (speedInput){
    console.log("null")
    const speedLimit = 70;
    let perPoint= 5;

if (speedInput >= 0 && speedInput<= 70){
    console.log("Ok");

}else {
     demeritPoints = Math.floor((speedInput - speedLimit) /perPoint);
        response = "points" +demeritPoints

    if (demeritPoints >= 12){
        console.log("license suspended");

        }else {
        console.log("points "+ demeritPoints);
    }
    }
   
}
speedDetector(80);













}