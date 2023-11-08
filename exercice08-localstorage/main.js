let saisie = document.querySelector('#saisie').value;

document.querySelector('#submit').addEventListener('click', function(e){
   localStorage.setItem('saisie', saisie);
    document.querySelector('#saisie').value = "";
});

// on recarchge la valeur au chargement de la page si y'en a une
window.addEventListener('load', function(){
    let saved = localStorage.getItem('saisie') ;
    if(saved) document.querySelector('#saisie').value = saved;
});
