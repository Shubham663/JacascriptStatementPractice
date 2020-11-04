let number = 1;
let digits = 0;
while(number >= 1){
    number/=10;
    digits++;
}
if(digits == 1)
    console.log("One's digit");
else if(digits == 2)
    console.log("Ten's digit");
else if(digits == 3)
    console.log("Hundred's digit");
else if(digits == 4)
    console.log("Thousand's digit");
else if(digits == 5)
    console.log("Ten-Thousand's digit");
else
    console.log("Value too large");