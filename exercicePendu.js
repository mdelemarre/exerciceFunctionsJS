function Pendu(tofind){
    this.masque = '',
    this.attempts = 10,
    this.tofind = tofind.toUpperCase().split('');
}

Pendu.prototype.TestChar = function(totest){

}
Pendu.prototype.TestWin = function(toWin){

}
Pendu.prototype.GenererMasque = function(){
    if(!this.tofind) console.log('Passez un mot a trouver avant !');
    else{
        this.masque = this.tofind;
        console.log(this.masque);
        this.masque.forEach(function(char, i){
            console.log(this.masque);
            if(i != 0 && i != (this.masque.length - 1)) {
                this.masque[i] = '_'
            }
        });

        console.log(this.masque.join(' '));
    }
}


let pendu = new Pendu('maison');
pendu.GenererMasque();
