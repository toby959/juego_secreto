let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario').value;//valor input

    // Verificar si el valor ingresado es un número entero entre 1 y 10
    if (!/^[1-9]$|^10$/.test(numeroDeUsuario)) {
        asignarTextoElemento('p', 'Error: Ingresa un número del 1 al 10');
        limpiarCaja();
        return;
    }

    numeroDeUsuario = parseInt(numeroDeUsuario);
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número es: ${numeroSecreto} en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`);
        limpiarCaja();
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('iniciar').disabled = true;
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'EL número Secreto es menor!!!.');
        } else {
            asignarTextoElemento('p', 'El número Secreto es mayor!!!.');
    }
    intentos++;
    limpiarCaja();
}
function reiniciarJuego() {
    document.getElementById('iniciar').disaenable = true;
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
    return;
} 

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {    
    
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();// Llama recursivamente a la función para generar un nuevo número
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
  }
}
 


function reiniciarJuego() {
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        listaNumerosSorteados = [];
    }
    document.getElementById('iniciar').disabled = false;
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}



function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

condicionesIniciales();




