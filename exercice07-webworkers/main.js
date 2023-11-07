let worker = new Worker('./worker.js');
document.querySelector('#search').addEventListener('click', () => {
    worker.postMessage(document.querySelector('#nomPokemon').value);
    worker.onmessage = function(event) {
        document.querySelector('#results').replaceChildren(event.data)
    }
});
