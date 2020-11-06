var dictionary = {};
let max = 0;
let min = 11;
function occurence(key,value){
    console.log(key + " " + value);
    return false;
}

while(true){
    let die = Math.floor(Math.random()*6) + 1;
    if(dictionary[die] == undefined)
        dictionary[die] = 1;
    else{
        let val = dictionary[die];
        val++;
        dictionary[die] = val;
        if(val == 10)
            break;
    }
}
for(let i=1; i <= 6 ; i++){
    if(dictionary[i] < min)
        min = dictionary[i];
    if(dictionary[i] > max)
        max = dictionary[i];
}
let min1=0;
let max1 = 0;
for(let i=0;i<=6;i++){
    if(dictionary[i] == min)
        min1 = i;
    if(dictionary[i] == max)
        max1 = i;
}
    
    for(let i=1;i<=6;i++){
        occurence(i,dictionary[i]);
    }
    console.log("The value that came maximum=10 times: " + max1);
    console.log("The value that came minimum=" + min + " times: " + min1);