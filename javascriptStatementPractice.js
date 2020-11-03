let max = 0;
let min = 1000;
for(i=0;i<5;i++){
    let val = Math.floor(Math.random()*1000);
    max=Math.max(max,val);
    min=Math.min(min,val);
}
console.log("min val " + min);
console.log("max val " + max);