prompt = require("prompt-sync")();
const choix = ["pierre", "feuille", "ciseaux"];
const ordi = choix[Math.floor(Math.random() * 3)];

let player = prompt("Pierre, feuille, ciseaux ?");


if(!choix.includes(player)){
    console.log("Veuillez entrez un choix valide");
    process.exit();
}
console.log(`Vous avez fait ${player} et l'ordinateur a fait ${ordi} !`);

if(player===ordi){
    console.log("Égalité");
}
else if(player==="pierre" && ordi==="ciseaux"){
    console.log("Vous avez gagné");
}
else if(player==="ciseaux" && ordi==="feuille"){
    console.log("Vous avez gagné");
}
else if(player==="feuille" && ordi==="pierre"){
    console.log("Vous avez gagné")
}
else{
    console.log("vous avez perdu !")
}