const n =27;
let val = isPrime(n);
if(val == true)
    console.log("The number " + n + " is a prime number");
else
    console.log("The number " + n + " is not a prime number");

function isPrime(n){
    for(i=2;i<=Math.floor(Math.sqrt(n));i++)
        if(n % i == 0)
            return false;
    return true;
}