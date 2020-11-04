const n = 6;
let val = powerOfTwo(n);
console.log(val);

function powerOfTwo(n){
    let val = 1;
    let i = 1;
    while(val < 256 && i <= n ){
        val*=2;
        i++;
    }
    return val;
}