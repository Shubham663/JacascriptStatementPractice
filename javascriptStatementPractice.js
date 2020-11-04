const val = 5;
fac = getFactorial(val);
console.log(fac);

function getFactorial(val){
    if(val ==2 || val ==1)
        return val;
    return val*getFactorial(val-1);
}