let monthToPersonNumberMap = new Map();
let count = 0;
while(count < 50){
    count++
    let month = 1 + Math.floor(Math.random()*12);
    if(monthToPersonNumberMap.get(month) == undefined){
        let persons = count.valueOf();
        monthToPersonNumberMap.set(month,persons);
    }
    else{
        let persons = monthToPersonNumberMap.get(month);
        persons += " " + count.valueOf();
        monthToPersonNumberMap.set(month,persons);
    }
}
console.log(monthToPersonNumberMap);