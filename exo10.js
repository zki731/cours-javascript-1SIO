const prompt = require("prompt-sync")();
let total = 0;
const notes = [];

for(let i =1; i<=5;i++){
    let note = Number(prompt("Veuillez entrez une note"))
    notes.push(note)
}
//boucle qui itère jusqu'à ce que I soit égal a 5
//ajoute l'input user a l'array notes

const moyenne = notes.reduce((a,b) => a + b) /notes.length 
//reduce sert ici a additionner tout les valeurs du tableau avec a en accumulateur et b pour 
//l'élement en cours de lecture. Il les combine jusqu'à avoir le total.
console.log(moyenne.toFixed(2))