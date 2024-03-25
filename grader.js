//prompt
//const studentMarks = prompt("Enter your marks")
//A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
function studentGrade(studentMarks){
    let finalGrade = "null";
    
if (studentMarks > 79){
    finalGrade = "A"
}else if (studentMarks >= 60 && studentMarks<= 79){
    finalGrade = "B"
}else if (studentMarks >= 49 && studentMarks <= 59){
    finalGrade = "C"
}else if (studentMarks >= 40 && studentMarks < 49){
    finalGrade = "D"
}else if (studentMarks >= 0 && studentMarks < 40){
    finalGrade = "E"
}
return finalGrade;
}

console.log(studentGrade(42));
//document.getElementById("response").innerHTML = `Grade: <;> ${finalGrade}</i>`;