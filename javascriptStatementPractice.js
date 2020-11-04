let val = 100;
let noOfBets = 0;
let noOfWinnings = 0;

while(val > 0 && val < 200){
    noOfBets++;
    let val2 = Math.floor(Math.random()*2);
    if(val2 == 0){
        val++;
        noOfWinnings++;
    }
    else
        val--;
}

if(val == 200)
    console.log("Won in " + noOfBets + " bets. Goal of 200 reached");
else
    console.log("All money lost. You won " + noOfWinnings + " number of times and lost " + (noOfBets - noOfWinnings) + " times.");