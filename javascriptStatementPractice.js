let day = 20;
let month = 04;
var d = new Date(2020,month-1,day);
var d2 = new Date(2020,02,20);
var d3 = new Date(2020,05,20);
if(d > d2    &&    d < d3)
    console.log("date present in range " + d2 + " to " + d3);
// if()