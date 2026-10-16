const prompt = require("prompt-sync")();

poidsKg = prompt("Votre poids ? :");
tailleM = prompt("Votre taille ? : ");

tailleM = Number(tailleM);
poidsKg = Number(poidsKg);

IMC = poidsKg / (tailleM * tailleM);
console.log(`Votre IMC est de :${(IMC).toFixed(1)}` );

if (IMC < 18.5){
    console.log("Vous souffrez d'insufissance pondérale");
}
else if(IMC < 25){
    console.log("Vous avez une corpulence normale");
}
else if (IMC < 30){
    console.log("Vous etes en surpoids");
}
else{
    console.log("Vous êtes en obésité");
}