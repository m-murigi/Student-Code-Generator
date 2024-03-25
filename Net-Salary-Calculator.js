//NHIF deductions
//grossSalary = 65000;
//nhif = (1300 *
function tax(basicSalary,benefits){
    let nhif =0
    let nssf =0

if (grossSalary >=0 && grossSalary <=5999){
    nhifDeduction = 150
}else if (basicSalary >=6000 && basicSalary <=7999){

    nhifDeduction = 300;
}else if (basicSalary >=8000 && basicSalary <=19999){
    nhifDeduction = 600

}else if (basicSalary >=20000 && basicSalary <=24999){
    nhifDeduction = 750

}else if (basicSalary >=25000 && basicSalary <=29999){
    nhifDeduction = 850

}else if (basicSalary >=35000 && basicSalary <=39999){
    nhifDeduction = 950

}else if (basicSalary >=40000 && basicSalary <=44999){
    nhifDeduction = 1000

}else if (basicSalary >=50000 && basicSalary <=59999){
    nhifDeduction = 1200

}else if (basicSalary >=60000 && basicSalary <=69999){
    nhifDeduction = 1300

}else if (basicSalary >=70000 && basicSalary <=79999){
    nhifDeduction = 1400

}else if (basicSalary >=80000 && basicSalary <=89999){
    nhifDeduction = 1500

}else if (basicSalary >=90000 && basicSalary <=99999){
        nhifDeduction = 1600

}else if (basicSalary>= 100000){
    nhifDeduction = 1700
}
}
//NSSF deduction calculation
//basic salary * 6% of the pensionable pay
//nssf = grossSalary * 6 % 
//nssf = (65000 * 0.06) =3900







let basicSalary = 400000;
let benefits = 2400



function tax(taxableIncome){
    let tax = 0;
    let grossTax = 0;
    let rated = 0
    let personalRelief = 2400


    if (taxableIncome> 0 && taxableIncome< 24000){
       grossTax =(incomeSalary*0.10);
    }else if (taxableIncome>= 24001 && taxableIncome<= 32333){
        rated =(taxableIncome-24000)*0.25
        grossTax = 2400 +rated
        taxed = taxableIncome- grossTax;
    }else if (taxableIncome >= 32334&& taxableIncome <= 500000){
        rated = (taxableIncome- 32334)*0.30
        grossTax =2400+2093.25 +rated
    }else if (taxableIncome >= 500001 && taxableIncome <=800000){
        rated = (taxableIncome - 800000) * 0.325;
        grossTax =2400 +2083.25 +140301  + rated
    }else if (taxableIncome >800000){ 
        rated = (taxableIncome -800000) *0.35
        grossTax = 2400+2083.25+140300.1 + rated


    }
    paye = (grossTax - personalRelief);
    netSalary = (taxableIncome - paye)
    return {paye, netSalary}
}
let myTaxableIncome  = benefitsfunction(basicSalary,benefits);
let taxed = tax(myTaxableIncome.taxableIncome);
return {
    NSSFDeductions:  myTaxableIncome.nssf,
    NHIFDeductions:  myTaxableIncome.nhif,
    payee:  taxed.paye,
    grosssalary:  basicSalary,
    netsalary:  taxed.netsalary
}
    



