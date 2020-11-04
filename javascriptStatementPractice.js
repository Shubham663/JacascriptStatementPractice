let number = 10000;
let digits = 0;
while(number >= 1){
    number/=10;
    digits++;
}
switch(digits){
    case 1:
        console.log("One's digit");
        break;
    case 2:
        console.log("Ten's digit");
        break;
    case 3:
        console.log("Hundred's digit");
        break;
    case 4:
        console.log("Thousand's digit");
        break;
    case 5:
        console.log("Ten-Thousand's digit");
        break;
    default:
        console.log("Value too large");
}