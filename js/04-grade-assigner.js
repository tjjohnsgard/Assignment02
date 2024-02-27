var num = parseInt(prompt("Enter grade between 1 and 100:"));

//Check num between 1 and 100
if (num >= 1 && num <= 100) {
    //Check num range, provide grade
    if (num >= 60 && num <= 69) {
        console.log("You received a D");
    } else if (num >= 70 && num <= 79) {
        console.log("You received a C");
    } else if (num >= 80 && num <= 89) {
        console.log("You received a B");
    } else if (num >= 90 && num <= 100) {
        console.log("You received an A");
    } else {
        console.log("You received an F");
    }
} else {
    console.log("Only numbers between 1 and 100 accepted.");
}