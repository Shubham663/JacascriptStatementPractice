let val = 14341;
let temp =val;
let sum=0

while(temp >= 1){
    let remainder = temp%10;
    temp = Math.floor(temp/10);
    sum = sum*10 + remainder;
}

if(sum == val)
    console.log("The number is a pallindrome");
else
    console.log("The number is not a pallindrome");