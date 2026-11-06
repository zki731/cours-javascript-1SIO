//fonction qui permet de changer la couleur de la couleur de fond
function changeBgColor(color){
    document.body.style.backgroundColor = color;
}
//fonction qui permet d'ajouter un élément à une liste
function addToList(){
    const list = document.getElementById("list")
    const nouvelLi = document.createElement("li")
    nouvelLi.textContent ="Cock"
    list.appendChild(nouvelLi)
}
function addToList2(event){
    event.preventDefault();
    const list2 = document.getElementById("list2")
    const nouvelLi2 = document.createElement("li")
    const input = document.getElementById("text")
    nouvelLi2.textContent = input.value
    list2.appendChild(nouvelLi2)
    input.value = ""
}