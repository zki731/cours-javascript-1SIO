const prixHt = 49.90;
const tva = 1.2;

console.log(`Prix hors taxes : ${prixHt} €`);
console.log(`Prix toutes taxes comprises : ${(prixHt *tva).toFixed(2)} €`)
console.log(`Montant de la TVA : ${(prixHt*tva/6).toFixed(2)} €`)
