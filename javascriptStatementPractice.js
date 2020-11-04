let number1 = 4;
let number2 = 6;
let number3 = 9;
let val1 = number1 + number2*number3;
let val2 = number1%number2 + number3;
let val3 = number3 + number1/number2;
let val4 = number3 + number1*number2;

let max1= Math.max(val1,val2);
let max2= Math.max(val3,val4);
let max3 = Math.max(max1,max2);
console.log(max3);