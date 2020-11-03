let avg = 0;
let sum = 0;
for(i=0;i<5;i++){
    let val = Math.floor(Math.random()*100);
    sum += val;
}
avg = sum/5;
console.log(sum);
console.log(avg);