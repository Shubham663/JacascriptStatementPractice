const ftToInch = 12;
const inchToFt = 1/12;

let length = 4;
console.log("length in inches " + length);
console.log("length in feet " + length*inchToFt);

let area = 60*40;
console.log("area in inch squared " + area);
console.log("area in feet squared " + area*inchToFt*inchToFt);
console.log("area in acres " + (area*inchToFt*inchToFt)/43560);
