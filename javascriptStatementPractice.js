let val = 127;
let temp =val;
let sum=0

if(isPrime(val))
    console.log("The number is prime");
else
    console.log("The number is not prime");

let pallindrome = getPallindrome(val);

if(isPrime(pallindrome))
    console.log("The number's pallindrome is prime");
else
    console.log("The number's pallindrome is not prime");

function getPallindrome(val){
    let temp = val;
    let sum = 0;
    while(temp >= 1){
        let remainder = temp%10;
        temp = Math.floor(temp/10);
        sum = sum*10 + remainder;
    }
    return sum;
}

function isPrime(val){
    for(let i=2; i <= Math.sqrt(val);i++)
        if(val%i == 0)
            return false;
    return true;
}