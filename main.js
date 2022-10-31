var cajaUno = document.getElementById("caja uno")
var cajaDos = document.getElementById("caja dos")
var cajaTres = document.getElementById("caja tres")
var cajaCuatro = document.getElementById("caja cuatro")
var cajaCinco = document.getElementById("caja cinco")
var cajaSeis = document.getElementById("caja seis")
var cajaSiete = document.getElementById("caja siete")
var cajaOcho = document.getElementById("caja ocho")
var cajaNueve = document.getElementById("caja nueve")
var botonReset = document.getElementById("reset")
var resultado = document.getElementById("resultado")

let arrayCajas = [null, null, null, null, null, null, null, null, null]

let turnoActual = true;
let jugando = true;


function checkearResultado(){
    if(arrayCajas.includes(null)){
       
    } else{
        resultado.innerHTML = "Empate!"
    }

    if((arrayCajas[0] === true && arrayCajas[1] === true && arrayCajas[2] === true) || (arrayCajas[3] === true && arrayCajas[4] === true && arrayCajas[5] === true) || (arrayCajas[6] === true && arrayCajas[7] === true && arrayCajas[8] === true) || (arrayCajas[0] === true && arrayCajas[3] === true && arrayCajas[6] === true) || (arrayCajas[1] === true && arrayCajas[4] === true && arrayCajas[7] === true) || (arrayCajas[2] === true && arrayCajas[5] === true && arrayCajas[8] === true) || (arrayCajas[0] === true && arrayCajas[4] === true && arrayCajas[8] === true) || (arrayCajas[2] === true && arrayCajas[4] === true && arrayCajas[6] === true)){
        resultado.innerHTML = "Gano el jugador uno!"
        jugando = false;
    } else if((arrayCajas[0] === false && arrayCajas[1] === false && arrayCajas[2] === false) || (arrayCajas[3] === false && arrayCajas[4] === false && arrayCajas[5] === false) || (arrayCajas[6] === false && arrayCajas[7] === false && arrayCajas[8] === false) || (arrayCajas[0] === false && arrayCajas[3] === false && arrayCajas[6] === false) || (arrayCajas[1] === false && arrayCajas[4] === false && arrayCajas[7] === false) || (arrayCajas[2] === false && arrayCajas[5] === false && arrayCajas[8] === false) || (arrayCajas[0] === false && arrayCajas[4] === false && arrayCajas[8] === false) || (arrayCajas[2] === false && arrayCajas[4] === false && arrayCajas[6] === false)){
        resultado.innerHTML = "Gano el jugador dos!"
        jugando = false;
    }

}

function cambiarTurno(){
    turnoActual = !turnoActual
    if(turnoActual === true){
        resultado.innerHTML = "Turno del jugador uno."
    } else{
        resultado.innerHTML = "Turno del jugador dos."
    }
    checkearResultado();
}

function resetear(){
    arrayCajas = [null, null, null, null, null, null, null, null, null];
    turnoActual = true;
    jugando = true;
    resultado.innerHTML = "Vamos a jugar!"
    cajaUno.innerHTML = ""
    cajaDos.innerHTML = ""
    cajaTres.innerHTML = ""
    cajaCuatro.innerHTML = ""
    cajaCinco.innerHTML = ""
    cajaSeis.innerHTML = ""
    cajaSiete.innerHTML = ""
    cajaOcho.innerHTML = ""
    cajaNueve.innerHTML = ""
}

botonReset.addEventListener("click", e =>{
    resetear();
})

cajaUno.addEventListener("click", e =>{
    if(arrayCajas[0] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[0] = true;
        
        cajaUno.innerHTML = "X" 
        cajaUno.setAttribute("class", "caja azul")
        cambiarTurno()
    } else{
        arrayCajas[0] = false;
        cajaUno.innerHTML = "O"
        cajaUno.setAttribute("class", "caja rojo")
        cambiarTurno()
    }}
})

cajaDos.addEventListener("click", e =>{
    if(arrayCajas[1] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[1] = true;
        cajaDos.setAttribute("class", "caja azul")
        cajaDos.innerHTML = "X"
        cambiarTurno()
    } else{
        arrayCajas[1] = false;
        
        cajaDos.innerHTML = "O"
        cajaDos.setAttribute("class", "caja rojo")
        cambiarTurno()
    }}
})

cajaTres.addEventListener("click", e =>{
    if(arrayCajas[2] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[2] = true;
        cajaTres.setAttribute("class", "caja azul")
        cajaTres.innerHTML = "X"
        cambiarTurno()
    } else{
        arrayCajas[2] = false;
        cajaTres.setAttribute("class", "caja rojo")
        cajaTres.innerHTML = "O"
        cambiarTurno()
    }}
})

cajaCuatro.addEventListener("click", e =>{
    if(arrayCajas[3] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[3] = true;
        cajaCuatro.setAttribute("class", "caja azul")
        cajaCuatro.innerHTML = "X"
        cambiarTurno()
    } else{
        arrayCajas[3] = false;
        cajaCuatro.innerHTML = "O"
        cajaCuatro.setAttribute("class", "caja rojo")
        cambiarTurno()
    }}
})

cajaCinco.addEventListener("click", e =>{
    if(arrayCajas[4] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[4] = true;
        cajaCinco.setAttribute("class", "caja azul")
        cajaCinco.innerHTML = "X"
        cambiarTurno()
    } else{
        arrayCajas[4] = false;
        cajaCinco.setAttribute("class", "caja rojo")
        cajaCinco.innerHTML = "O"
        cambiarTurno()
    }}
})

cajaSeis.addEventListener("click", e =>{
    if(arrayCajas[5] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[5] = true;
        cajaSeis.setAttribute("class", "caja azul")
        cajaSeis.innerHTML = "X"
        cambiarTurno()
    } else{
        arrayCajas[5] = false;
        cajaSeis.setAttribute("class", "caja rojo")
        cajaSeis.innerHTML = "O"
        cambiarTurno()
    }}
})

cajaSiete.addEventListener("click", e =>{
    if(arrayCajas[6] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[6] = true;
        cajaSiete.setAttribute("class", "caja azul")
        cajaSiete.innerHTML = "X"
        cambiarTurno()
    } else{
        arrayCajas[6] = false;
        cajaSiete.setAttribute("class", "caja rojo")
        cajaSiete.innerHTML = "O"
        cambiarTurno()
    }}
})

cajaOcho.addEventListener("click", e =>{
    if(arrayCajas[7] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[7] = true;
        cajaOcho.setAttribute("class", "caja azul")
        cajaOcho.innerHTML = "X"
        cambiarTurno()
    } else{
        arrayCajas[7] = false;
        cajaOcho.setAttribute("class", "caja rojo")
        cajaOcho.innerHTML = "O"
        cambiarTurno()
    }}
})

cajaNueve.addEventListener("click", e =>{
    if(arrayCajas[8] === null && jugando === true){
        if(turnoActual === true){
        arrayCajas[8] = true;
        cajaNueve.setAttribute("class", "caja azul")
        cajaNueve.innerHTML = "X"
        cambiarTurno()
    } else{
        arrayCajas[8] = false;
        cajaNueve.setAttribute("class", "caja rojo")
        cajaNueve.innerHTML = "O"
        cambiarTurno()
    }}
})