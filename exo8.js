prompt = require("prompt-sync")();
const choix = ["pierre", "feuille", "ciseaux"];
const ordi = choix[Math.floor(Math.random() * 3)];

let player = prompt("Pierre, feuille, ciseaux ?");


while(!choix.includes(player)){
    console.log("Veuillez entrez un choix valide")
    player = prompt("Pierre, feuille, ciseaux ?");
}
console.log(`Vous avez fait ${player} et l'ordinateur a fait ${ordi} !`);

if(player===ordi){
    console.log("Égalité");
}
else if(player==="pierre" && ordi==="ciseaux" 
        ||player==="ciseaux" && ordi==="feuille"
        ||player==="feuille" && ordi==="pierre"){
    console.log("Vous avez gagné");
}
else{
    console.log("vous avez perdu !")
}