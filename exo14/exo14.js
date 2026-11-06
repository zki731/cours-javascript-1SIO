const fs = require("fs");
const prompt = require("prompt-sync")();

function NombreSecret(){
    let essais = 0;
    let bestScore = null;

    //lecture du meilleur score(si le fichier existe)
    if (fs.existsSync("score.txt")){
        const contenu = fs.readFileSync("score.txt", "utf8").trim(); //variable qui contient le texte
        if (contenu !== "" && !Number.isNaN(Number(contenu))){ //vérifie si contenu est une chaine non vide qui represente un nb valide
            bestScore = Number(contenu); //Variable du meilleur score retransformée en nb
            console.log(`Meilleur score actuel : ${bestScore} essais`); //affiche le meiilleur score au début du programme
        }
    }

    const nbSecret = Math.floor(Math.random() * 100) + 1; //Variable du nombre secret
    let userGuess = Number(prompt("Choissiez un nombre entre 1 et 100 : ")); //Prompt Utilisateur pour le jeu

    //Boucle de l'exo 11 : 
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

 if (bestScore === null || essais < bestScore) { //Compare le nb d'essais avec le record
        fs.writeFileSync("score.txt", String(essais), "utf8");
        console.log("Nouveau record !");
    }

}
NombreSecret();