function calculerTTC(prixHT, taux){
    return prixHT * taux * 100;
}
// se présente comme ceci func + nom + parametres
console.log(calculerTTC(49.9,0.055));
