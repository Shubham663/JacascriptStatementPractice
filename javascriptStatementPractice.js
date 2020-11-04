let heads = 0;
let tails = 0;

while(heads <11 && tails < 11){
    let val = Math.floor(Math.random()*2);
    if(val == 0)
        heads++;
    else
        tails++;
}

if(tails == 11)
    console.log("Tails won eleven times");
else
    console.log("Heads won eleven times");