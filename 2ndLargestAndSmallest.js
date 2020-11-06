let numberArray = new Array();
for(let i=0;i<10;i++){
    let number = 100 + Math.floor(Math.random()*900);
    numberArray.push(number);
}
console.log(numberArray);
let smallest = 1000;
let secondSmallest = 1000;
let largest = 0;
let secondlargest = 0;
for(let i=0;i<numberArray.length;i++){
    let val = numberArray[i];
    if( val < secondSmallest){
        if(val < smallest){
            secondSmallest = smallest;
            smallest = val;
        }
        else
        secondSmallest = val;
    }
    if( val > secondlargest){
        if(val > largest){
            secondlargest = largest;
            largest = val;
        }
        else
        secondlargest = val;
    }
}
console.log("Second smallest element " + secondSmallest);
console.log("Second largest element: " + secondlargest);