self.onmessage = function(event) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${event.data}`)
    .then(response => response.json())
    .then(data => {
        self.postMessage(data);
    })
    .catch(e => self.postMessage(e));
}
