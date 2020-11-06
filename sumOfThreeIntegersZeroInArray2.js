let number = [1,5,8,4,3,-9,-7];
let numbers = [1,5,-6];
let sumMap = ["0:0"];

function sumThreeZero(noToSumMap){
    let noOfElements =  noToSumMap.substr(0,noToSumMap.indexOf(':')).split(',').length;
    let sum = parseInt(noToSumMap.substr(noToSumMap.indexOf(':')+1,noToSumMap.length));
    return noOfElements == 4 && sum == 0;
}


for(let i=0;i<number.length;i++){
    let initial = sumMap.length;
    for(let j=0;j<initial;j++){
        val1 = sumMap[j];
        val2 = sumMap[j];
        val1 = val1.substr(0,val1.indexOf(':'));
        val2 = val2.substr(val2.indexOf(':')+1,val2.length);
        val2 = parseInt(val2);
        val1 = val1 + "," + number[i];
        val2 = val2 + number[i];
        sumMap.push(val1+":"+val2);
    }
}
if((element = sumMap.find(sumThreeZero)) != NaN){
    console.log("The three numbers whose sum is zero are: ")
    let nums = element.substr(0,element.indexOf(':')).split(',');
    console.log(nums[1] + " " + nums[2] + " " + nums[3]);
}
else
    console.log("Array contains no such three numbers whose sum is zero");