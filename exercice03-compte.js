class CompteBancaire {
    titulaire = '';
    solde = 0;

    constructor(titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    }

    afficher() {
        console.log(`Titulaire du compte ${this.titulaire}, solde du compte ${this.solde}`);
    }

    crediter(toAdd){
        this.solde += toAdd;
        console.log(`Solde du compte ${this.solde}`);
    }

    debiter(toRemove){
        this.solde -= toRemove;
        console.log(`Solde du compte ${this.solde}`);
    }
}

class CompteEpargne extends CompteBancaire {
    taux = 0.0;
    constructor(titulaire, solde, taux){
        super(titulaire, solde);

        this.taux = taux;
    }

    interets(){
        console.log(`Les interets s'élèvent à : ${this.solde*this.taux} €`);
    }
}

let monCompteEpargne = new CompteEpargne('Martin D', 1000, 0.05);
monCompteEpargne.crediter(500);
monCompteEpargne.debiter(250);
monCompteEpargne.interets();
monCompteEpargne.afficher();
