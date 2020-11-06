const val = 180;
let primeFactors = getPrimeFactors(val);

console.log("The prime factors of " + val + " are " + primeFactors);

function getPrimeFactors(val){
    let primeFactors = new Array();
    while(val > 1){
        for(i=2;i<=val;i++)
            if(val%i == 0){
                val/=i;
                primeFactors.push(i);
                break;
            }
    }
    return primeFactors;
}