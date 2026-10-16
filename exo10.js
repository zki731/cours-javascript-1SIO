const prompt = require("prompt-sync")();
let total = 0;
const notes = [];

for(let i =0; i<=5;i++){
    let note = number(prompt("Veuillez entrez une note"))
    notes.push(note)
}
console.log(notes)