// comment faire un appel basique d'API avec XHR

const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3000/api/pokemons");

xhr.send();
