//Diagonal calculation

let squareSide = 9;

const diagonal = squareSide * Math.SQRT2;

console.log(`The diagonal of a square where the length of each side is 9 is ${diagonal}`);

//Diagonal calculation

//Area calculation

let firstSide = 5;
let seconSide = 6;
let thirdSide = 7;

const semiPerimeter = (firstSide + seconSide + thirdSide)/2
const areaHeronFormula = Math.sqrt(semiPerimeter*(semiPerimeter-firstSide)*(semiPerimeter-seconSide)*(semiPerimeter-thirdSide))

console.log(`The area of a triangle wihere the lengths of the three sides are 5, 6 and 7 is ${areaHeronFormula}`);

//Area calculation

//Surface and circumference calculation

let radius = 4;

const pi = Math.PI;
const surfaceArea = pi * Math.pow(radius, 2);
const circumference = 2 * pi * radius;

console.log(`The surface area of a circle which radius is 4 is ${surfaceArea}. The circumference of a circle which radius is 4 is ${circumference}`);

//Surface and circumference calculation