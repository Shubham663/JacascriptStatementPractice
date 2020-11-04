const n = 5;
let val = getNthHarmonic(n);
console.log(val);

function getNthHarmonic(n){
    sum = 0;
    for(i=1;i<=n;i++)
        sum += 1/i;
    return sum;
}