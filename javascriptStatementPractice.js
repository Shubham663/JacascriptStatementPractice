let year = 2100;
if(isLeapYear(year))
    console.log("The year " + year + " is a leap year");
else
    console.log("The year " + year + " is not a leap year");

function isLeapYear(year){
    let digits = 0;
    let temp = year;
    while(temp >= 1){
        digits++;
        temp/=10;
    }
    if(digits == 4 && year%4 == 0){
        if(year%100 !=0 || (year%100 == 0 && year%400 == 0))
            return true;
    }
    return false;
}