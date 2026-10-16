prompt = require("prompt-sync")();
age = prompt("Veuillez saisir votre âge");
age = Number(age);

if (isNaN(age)){
    console.log("Saisie incorrecte")
}
else if(age > 65 && age >18){
    console.log("senior");
}
else if(age <18){
    console.log("Mineur");
}
else if(age >= 18){
    console.log("Majeur");
}
