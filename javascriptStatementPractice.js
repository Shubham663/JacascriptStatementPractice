let val = Math.floor(Math.random()*2);
let temp = Math.floor(Math.random()*68)+32;
const CELSIUS_LOWEST = 0;
const CELSIUS_HIGHEST = 100;
const FAHRENHEIT_LOWEST = 32;
const FAHRENHEIT_HIGHEST = 212;

let temp2 = convertTemperature(val,temp);
if(temp2 != 300){
    if(val == 0)
        console.log("The temperature in fahrenheit is " + temp2);
    else
        console.log("The temperature in celsius is " + temp2);
}
function convertTemperature(val,temp){
    switch(val){
    case 0: if(temp <CELSIUS_LOWEST || temp>CELSIUS_HIGHEST){
                console.log("The temperature is not bw boiling and freezing point in degree Celsius");
                return 300;
            }
            let f = temp*9/5 + 32;
            return f;
    case 1: if(temp<FAHRENHEIT_LOWEST || temp>FAHRENHEIT_HIGHEST){
                console.log("The temperature is not bw boiling and freezing point in degree Fahrenheit");
                return 300;
            }  
            let c = (temp-32)*5/9;
            return c;
    }
}