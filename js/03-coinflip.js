//Generate flip random number
var flip = Math.round(Math.random());

//Prompt "Heads" or "Tails"
var pick = prompt("Select 'Heads' or 'Tails':");

//Conditional flip check
if (flip === 0) {
    if (pick.toLowerCase() === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
} else {
    if (pick.toLowerCase() === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
}