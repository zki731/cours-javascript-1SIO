//fonction qui permet de changer la couleur de la couleur de fond
function changeBgColor(color){
    document.body.style.backgroundColor = color;
}
//fonctions qui permettent d'ajouter des éléments à une liste
function addToList(){
    const list = document.getElementById("list");
    const nouvelLi = document.createElement("li");
    nouvelLi.textContent ="Cock";
    list.appendChild(nouvelLi);
}
function addToList2(event){
    event.preventDefault();
    const list2 = document.getElementById("list2");
    const nouvelLi2 = document.createElement("li");
    const input = document.getElementById("text");
    nouvelLi2.textContent = input.value;
    list2.appendChild(nouvelLi2);
    input.value = ""
}
//fonction de l'exo 3 :
function calculate(){
    const input1 = document.getElementById("first-number");
    const input2 = document.getElementById("second-number");
    const result = Number(input1.value) + Number(input2.value);
    document.getElementById("result").textContent = `Le résultat est : ${result}`;
}