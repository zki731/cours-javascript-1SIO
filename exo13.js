const prompt = require("prompt-sync")();

function estMajeur(age){
    return age>=18
}

function estPair(n){
    return n % 2 ===0;
}

//Partie de l'exo sur la fonction estMajeur
console.log("Bienvenue sur siteporno.com")

age = Number(prompt("Entrez votre âge : "))

if(estMajeur(age)){
    console.log("Accès autorisé")
}
else{
     console.log("Accès refusé")
}
//Partie de l'exo sur estPair 
for(let n = 1; n <= 20; n++){
    console.log(estPair(n))
}
