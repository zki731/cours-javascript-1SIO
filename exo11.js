const prompt = require("prompt-sync")();
let essais = 0;
const nbSecret = Math.floor(Math.random() * 100) + 1;

let userGuess = Number(prompt("Choissiez un nombre entre 1 et 100 : "));

while(userGuess !=nbSecret){
    if(userGuess<nbSecret){
        console.log("Trop petit");
        essais++;
        userGuess = Number(prompt("Choissiez un nombre entre 1 et 100 : "));
    }
    else if(userGuess>nbSecret){
        console.log("Trop Grand");
        essais++;
        userGuess = Number(prompt("Choissiez un nombre entre 1 et 100 : "));
    }
    
}
console.log(`Tu as trouvé en ${essais} essais`);
console.log(`Le nombre secret était ${nbSecret}`);
