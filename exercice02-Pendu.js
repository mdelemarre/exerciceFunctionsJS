function Pendu(tofind){
    this.masque = '',
    this.attempts = 10,
    this.tofind = tofind.toUpperCase().split('');
}

Pendu.prototype.TestChar = function(totest){
    this.tofind.forEach((char, i) => {
       if(char === totest.toUpperCase()) this.masque[i] = char;
    });
    this.attempts--;

    if(attempts === 0) console.log('Perdu ! Vous navez plus d\'essais');
    console.log(this.masque.join(' '), `Essais restants : ${this.attempts}`);
}

Pendu.prototype.TestWin = function(toWin){
    if(toWin.toUpperCase() === this.tofind.join('')) return console.log(`Bien ouej, le mot était bien ${toWin.toUpperCase()}`);
    else {
        this.attempts--;
        console.log(`Raté, essai encore`, `Essais restants : ${this.attempts}`);
        console.log(this.masque.join(' '));
    }
}
Pendu.prototype.GenererMasque = function(){
    if(!this.tofind) console.log('Passez un mot a trouver avant !');
    else{
        this.masque = this.tofind;
        console.log(this.masque);
        this.masque.forEach((char, i) => {
            if (i != 0 && i != (this.masque.length - 1)) {
                this.masque[i] = '_'
            }
        });
        console.log(this.masque.join(' '));
    }
}


let pendu = new Pendu('maison');
pendu.GenererMasque();

pendu.TestChar("a");
pendu.TestWin('madzdn');
