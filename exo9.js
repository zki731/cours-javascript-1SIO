prompt = require("prompt-sync")();

for(let i =1; i <= 10; i++){
    console.log(i);
}
for(let n = 2; n <= 20; n = n+2){
    console.log(n)
}
let m = prompt("Choissisez un chiffre de 1 à 10 :")

for(let x =1; x <= 10; x++){
    console.log(m*x)
}
let somme = 0;
for(let y = 1; y<=100; y++ ) somme +=y;{
    console.log(somme)
}