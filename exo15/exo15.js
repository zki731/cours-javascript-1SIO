const fs = require("fs");
let contenu = fs.readFileSync("serveur.log","utf8");
const lignes = contenu.split("\n")

let errorCount = 0;
let infoCount = 0;
let warningCount = 0; 
const lignesErreur = []

for(let i = 0; i < lignes.length; i++){
    if(lignes[i].includes("ERROR")){
        errorCount++;
        lignesErreur.push(`${i + 1} : ${lignes[i]}`) //on incrémente i (car il commence a 0 dans notre tableau) et on affiche la valeur actuelle de I ()
    }
    else if(lignes[i].includes("WARNING")){
        warningCount++;
    }
    else if(lignes[i].includes("INFO"))
        infoCount++;
}



console.log(lignesErreur)
console.log(`INFO : ${infoCount}`)
console.log(`WARNING : ${warningCount}`)
console.log(`ERROR : ${errorCount}`)
