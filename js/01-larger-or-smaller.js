//Prompt for integers
var int1 = parseInt(prompt("Enter first integer:"));
var int2 = parseInt(prompt("Enter second integer:"));

//Check equal
if (int1 === int2) {
    document.write("Numbers are equal: " + int1);
}

//Check first greater
else if (int1 > int2) {
    document.write("Larger number is: " + int1);
}

//Or second greater
else {
    document.write("Larger number is: " + int2);
}