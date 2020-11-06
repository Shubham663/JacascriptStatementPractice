let numberArray = new Array();
for(let i=0;i<10;i++){
    let number = 100 + Math.floor(Math.random()*900);
    numberArray.push(number);
}
console.log(numberArray);