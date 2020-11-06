let numberArray = new Array();
for(let i=0;i<10;i++){
    let number = 100 + Math.floor(Math.random()*900);
    numberArray.push(number);
}
console.log(numberArray);
let sortNumArray = numberArray.slice(0).sort();
let secondSmallest = sortNumArray[1];
let secondlargest = sortNumArray[8];
console.log("Second smallest element " + secondSmallest);
console.log("Second largest element: " + secondlargest);