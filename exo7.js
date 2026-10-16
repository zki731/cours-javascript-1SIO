prompt = require("prompt-sync")();
let Age = prompt("Veuillez saisir votre age :");
let Date = prompt("Veuillez saisir le jour de la semaine (Avec une majuscule) :");
let isAdulte = prompt("Etes vous accompagné d'un adulte ?");
Age = Number(Age);

if (isAdulte==="Oui"){
    isAdulte = true;
}
if (Age <=12 && isAdulte === true){
    console.log('Tarif Applicable : Gratuit')
}
else if(Age <= 12){
    console.log(`Tarif Applicable : ${5} €`);
}
else if(Date === "Mercredi"){
    console.log(`Tarif Applicable : ${6} €`);
}
else if(Age < 25){
    console.log(`Tarif Applicable : ${7} €`);
}
else if(Age > 25){
    console.log(`Tarif Applicable : ${10} €`);
}
