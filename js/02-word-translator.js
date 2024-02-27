//Prompt language code
var code = prompt("Enter language code 'es', 'de', 'fr', 'en':");

//Translate Hello World
if (code === "es") { //Spanish
    console.log("Hola Mundo");
} else if (code === "de") { //German
    console.log("Hallo Welt");
} else if (code === "fr") { //French
    console.log("Bonjour le monde");
} else {  //Default English
    console.log("Hello World"); 
}