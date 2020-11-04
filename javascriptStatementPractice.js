const start =27;
const end = 135;
printPrimeNumbersInRange(start,end);


// let val = isPrime(n);
// if(val == true)
//     console.log("The number " + n + " is a prime number");
// else
//     console.log("The number " + n + " is not a prime number");

function printPrimeNumbersInRange(start,end){
    for(let i=start ; i<=end ; i=i+1 )
    {
        if(isPrime(i))
            console.log("The number " + i + " is prime.");
    }
}

function isPrime(n){
    for(let i=2;i<=Math.floor(Math.sqrt(n));i++)
        if(n % i == 0)
            return false;
    return true;
}