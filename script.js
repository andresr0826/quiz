let datosGlobales; // variable en las que se guarda el JSON obtenido 
let posPregunta; // indica la posición de los datos desde la primera pregunta "0" hasta la última "9"
let respuestaSeleccionada;
let numRespuestaSeleccionada;
let resultados = [];

function empezarQuiz() {


    document.getElementById("empezarQuiz").setAttribute("class", "oculto");

    document.getElementsByTagName("section")[0].removeAttribute("class");


    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((res) => res.json())
        .then((datos) => {
            datosGlobales = datos;
            mostrarPregunta(datosGlobales);
        });
};


function mostrarPregunta(datos, indice = 0) {

    document.getElementById("spanPregunta").innerText = indice + 1;


    // traemos los datos de las preguntas y respuestas
    let pregunta = datos.results[indice].question;
    let respuestasIncorrectas = datos.results[indice].incorrect_answers;
    let respuestaCorrecta = datos.results[indice].correct_answer;

    //usamos spread para generar un array uniendo todas las respuestas
    let arrayRespuestas = [...respuestasIncorrectas, respuestaCorrecta];


    let divPregunta = document.getElementById("contenedorPregunta");
    divPregunta.innerText = pregunta;

    let preguntasIncluidas = []; // guardamos los números de preguntas que ya se han incluido para no repetirlas
    let divRespuesta;
    let respuesta;
    let numAleatorio;

    //se asigna una respuesta a cada contenedor de forma aleatoria
    for (let i = 1; i < 5; i++) {
        do {
            numAleatorio = Math.trunc(Math.random() * 4); // número aleatorio entre 0 y 3
        } while (preguntasIncluidas.includes(numAleatorio)); // si el número ya ha salido hacemos que se genere otro

        divRespuesta = document.getElementById("respuesta" + i);
        divRespuesta.innerText = "";

        respuesta = arrayRespuestas[numAleatorio];
        divRespuesta.innerText = respuesta;

        preguntasIncluidas.push(numAleatorio); // incluimos el número en el array de los ya usados
    }

    posPregunta = indice + 1; 
}

function siguientePregunta() {

    document.getElementsByTagName("button")[1].removeAttribute("class");

    for (let i = 1; i < 5; i++) {

        document.getElementById("respuesta" + i).removeAttribute("class");

    };


    if (posPregunta < 10) {

        mostrarPregunta(datosGlobales, posPregunta);

    } else {



        boton = document.getElementsByTagName("button");

        boton[1].setAttribute("class", "oculto");

        boton[2].setAttribute("class", "oculto");

        document.getElementById("mostrarResultados").removeAttribute("class");


    }

}

function seleccionarRespuesta(numRespuesta) {

    let liRespuesta;

    let respuestas = document.querySelectorAll("#contenedorRespuestas li");
    respuestas.forEach(function(respuesta) {
        respuesta.classList.remove("seleccionado");
    });

    liRespuesta = document.getElementById("respuesta" + numRespuesta);

    liRespuesta.classList.add("seleccionado");

    respuestaSeleccionada = liRespuesta.innerHTML;

    numRespuestaSeleccionada = numRespuesta;


}

function responder() {

    document.getElementsByTagName("button")[1].setAttribute("class", "oculto");


    let indice = posPregunta - 1;

    let resp = datosGlobales.results[indice].correct_answer;


    if (respuestaSeleccionada == resp) {

        document.getElementById("respuesta" + numRespuestaSeleccionada).setAttribute("class", "correcta");

        resultados.push(1);

        localStorage.setItem("puntuacion", JSON.stringify(resultados));


    } else {

        resultados.push(0);

        console.log(numRespuestaSeleccionada);

        document.getElementById("respuesta" + numRespuestaSeleccionada).setAttribute("class", "incorrecta");

        localStorage.setItem("puntuacion", JSON.stringify(resultados));
    }

};


