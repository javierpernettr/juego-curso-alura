
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = (texto);
    return;
}

function verificarIntento(){

    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos);

    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento("p", `Acertaste en ${intentos} en ${(intentos === 1 ) ?  'vez'  : 'veces'       }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        // el usuario no acerto
        if( numeroUsuario > numeroSecreto){
            asignarTextoElemento("p", "el numero secreto es menor");

        }else{
            asignarTextoElemento("p", "el número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
   
    return;
}

function limpiarCaja(){
   document.querySelector("#valorUsuario").value ="";
   
}
function condicionesIniciiales(){
    asignarTextoElemento("p",`Adivinando un numero del 1 al ${numeroMaximo}`);
    asignarTextoElemento("H1","Juego del numero secreto");
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si el numero generado esta incluido en la hista hacemos una operacion o sino hacemos otra
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los números posibles");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje  intervalo de números
   
    //generar el numero aleatorio
    
    //inicializar el numero de intento
   
    condicionesIniciiales();
    //desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}


condicionesIniciiales();


