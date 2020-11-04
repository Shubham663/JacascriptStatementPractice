let flip = flipCoin();
console.log(flip);

function flipCoin(){
    let flip = Math.floor(Math.random()*2)+1;
    if(flip == 1)
        return "Heads";
    else if(flip == 2)
        return "Tails";
}