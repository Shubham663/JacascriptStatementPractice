let start = 20;
let end = 80;
let i=0;
let doubleDigitArray = new Array();

while(11*i < end){
    if(11*i > start)
        doubleDigitArray.push(11*i);
    i++;
}

console.log(doubleDigitArray);