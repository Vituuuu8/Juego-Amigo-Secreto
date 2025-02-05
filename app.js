let nombres = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextoElemento('h1', 'Bienvenido al juego del amigo secreto!');
asignarTextoElemento('h2', 'Coloque el nombre de los jugadores uno por uno:');

function agregarAmigo() {
    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    nombres.push(nombre);
    inputNombre.value = "";
    actualizarLista();
}

function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = nombres.map(nombre => `<li>${nombre}</li>`).join('');
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Debe haber al menos un nombre para sortear.");
        return;
    }

    let nombreSorteado = nombres[Math.floor(Math.random() * nombres.length)];

    mostrarResultado(`El nombre sorteado es: ${nombreSorteado}`);
}

function mostrarResultado(resultado) {
    let listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = `<li>${resultado}</li>`;
}
