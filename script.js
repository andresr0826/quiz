let datosGlobales; // variables en las que se guarda el JSON obtenido 
let indiceGlobal; 
let respuestaSeleccionada;
let resultados = [];

function obtenerPregunta() {
  fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then((res) => res.json())
    .then((datos) => {
      datosGlobales = datos;
      mostrarPregunta(datosGlobales);
    });
}


function mostrarPregunta(datos, indice = 0) {

    document.getElementById("spanPregunta").innerText=indice+1;


    // Accedemos directamente a los datos de la pregunta
    let pregunta = datos.results[indice].question;
    let respuestasIncorrectas = datos.results[indice].incorrect_answers;
    let respuestaCorrecta = datos.results[indice].correct_answer;

    // Unimos todas las respuestas en un array
    let arrayRespuestas = [...respuestasIncorrectas, respuestaCorrecta];

    // Mostramos la pregunta en su contenedor
    let divPregunta = document.getElementById("contenedorPregunta");
    divPregunta.innerText = pregunta;

    let preguntasIncluidas = []; // Números aleatorios ya usados
    let divRespuesta;
    let respuesta;
    let numAleatorio;

    // Asignamos respuestas de manera aleatoria usando tus preferencias
    for (let i = 1; i < 5; i++) {
        do {
            numAleatorio = Math.trunc(Math.random() * 4); // Genera un número entre 0 y 3
        } while (preguntasIncluidas.includes(numAleatorio)); // Evita repeticiones

        divRespuesta = document.getElementById("respuesta" + i);
        divRespuesta.innerText = ""; // Limpiamos previamente el contenido

        respuesta = arrayRespuestas[numAleatorio];
        divRespuesta.innerText = respuesta; // Asignamos la respuesta

        preguntasIncluidas.push(numAleatorio); // Marcamos este número como usado
    }

    indiceGlobal = indice + 1; // Actualizamos el índice global
}

function siguientePregunta() {

    let indice = indiceGlobal;

    if(indice<10){

  mostrarPregunta(datosGlobales, indiceGlobal);

    }else alert("Ha finalizado el quiz");

    

}

function seleccionarRespuesta(numRespuesta) {

    let liRespuesta;

    let respuestas = document.querySelectorAll("#contenedorRespuestas li");
    respuestas.forEach((respuesta) => {
        respuesta.classList.remove("seleccionado");
    });

    liRespuesta = document.getElementById("respuesta" + numRespuesta);

    liRespuesta.classList.add("seleccionado");

    respuestaSeleccionada = liRespuesta.innerHTML;

    
}

function responder(respuestaSeleccionada, datosGlobales){

    let indice = indiceGlobal-1;

    console.log(indice);

    let resp = datosGlobales.results[indice].correct_answer;

    alert("resp correcta " + resp);

    alert("resp seleccionada " + respuestaSeleccionada);

    if(respuestaSeleccionada==resp){

        console.log("Entra if corr");

        resultados.push(1);

        
    }else {

        console.log("Entra if incorr");

        resultados.push(0);
    }

    console.log(resultados);


};


obtenerPregunta();
