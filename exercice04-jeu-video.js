class Personnage {
    nom = '';
    vie = 0;
    force = 0;
    constructor(nom, vie, force) {
        this.nom = nom;
        this.vie = vie;
        this.force = force;
    }

    attaquer(cible){
        if(cible instanceof Personnage){
            cible.prendDegats(this.force);
            console.log(`${cible.nom} prends ${this.force} points de dégats !`);
            if(cible.vie <= 0) console.log(`${cible.nom} est mort de décès !`);
            return cible;
        }
        else  console.log(`La cible n'est pas un personnage`);
    }

    prendDegats(pointForce){
        this.vie -= pointForce;
    }
}


class Gerrier extends Personnage{
    armure = 0;
    constructor(nom, vie, force, armure) {
        super(nom, vie, force);
        this.armure = armure;
    }

    prendDegats(pointForce) {
        super.prendDegats(pointForce);
        this.vie += this.armure;
    }
}

class Magicien extends Personnage{
    mana = 0;
    constructor(nom, vie, force, mana) {
        super(nom, vie, force);
        this.mana = mana;
    }

    attaquer(cible) {
        cible = super.attaquer(cible);
        cible.prendDegats(this.mana);
        return cible;
    }

    soigner(cible){
        cible.vie += this.mana
        return cible;
    }
}
