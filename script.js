function obtenerPregunta() {

    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then(res => res.json())
        .then(datos => crearPregunta(datos));

};


function crearPregunta(dato) {

    let arrayPreguntas = [];

    let arrayRespuestasIncorrectas = [];

    let arrayRespuestaCorrecta = [];

    for (let i = 0; i < 10; i++) {

        arrayPreguntas.push(dato.results[i].question);

        arrayRespuestasIncorrectas.push(dato.results[i].incorrect_answers);

        arrayRespuestaCorrecta.push(dato.results[i].correct_answer);

    }


    return [arrayPreguntas, arrayRespuestasIncorrectas, arrayRespuestaCorrecta];

};

function mostrarPregunta(datos, indice=0) {


    let pregunta = crearPregunta(datos)[0][indice]; //traigo los datos del array de la primera pregunta

    let respuestasIncorrectas = crearPregunta(datos)[1][indice]; //traigo los datos del array de las respuestas incorrectas

    let respuestaCorrecta = crearPregunta(datos)[2][indice]; //traigo los datos del array de la respuesta correcta

    let arrayRespuestas = [...respuestasIncorrectas, respuestaCorrecta];

    let divPregunta = document.getElementById("contenedorPregunta"); //mostramos la pregunta en su contenedor div

    let textoPregunta = document.createTextNode(pregunta);

    divPregunta.appendChild(textoPregunta);

    let divRepuesta;

    let respuesta;

    let textoRespuesta;

    let numAleatorio; // número aleatorio entre 0, 1, 2 y 3

    let preguntasIncluidas = [];

    for (let i = 1; i < 5; i++) {


        do {

            numAleatorio = Math.trunc(Math.floor(Math.random() * (4)));

        } while (preguntasIncluidas.includes(numAleatorio)); // si el nº de pregunta ya está incluido, repetir


        divRepuesta = document.getElementById("respuesta" + i); // pinto la pregunta

        respuesta = arrayRespuestas[numAleatorio];

        textoRespuesta = document.createTextNode(respuesta);

        divRepuesta.appendChild(textoRespuesta);

        preguntasIncluidas.push(numAleatorio);



    }


};

function siguientePregunta(datos=datosParaPreguntas){



    mostrarPregunta(datos, 1);


}



obtenerPregunta();













/*let resultados = { "response_code": 0, "results": [{ "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "category": "RW50ZXJ0YWlubWVudDogRmlsbQ==", "question": "SW4gdGhlIEZyaWRheSBUaGUgMTN0aCBzZXJpZXMsIHdoYXQgaXMgSmFzb24ncyBtb3RoZXIncyBmaXJzdCBuYW1lPw==", "correct_answer": "UGFtZWxh", "incorrect_answers": ["TWFyeQ==", "Q2hyaXN0aW5l", "QW5nZWxpbmU="] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "category": "U2NpZW5jZSAmIE5hdHVyZQ==", "question": "V2hpY2ggb2YgdGhlc2UgY2hvaWNlcyBpcyBub3Qgb25lIG9mIHRoZSBwaGFzZXMgb2YgbWl0b3Npcz8=", "correct_answer": "RGlwbG9waGFzZQ==", "incorrect_answers": ["TWV0YXBoYXNl", "QW5hcGhhc2U=", "VGVsb3BoYXNl"] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "ZWFzeQ==", "category": "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=", "question": "V2hhdCBVbHRpbWF0ZSBkb2VzIE1ha290byBOYWVnaSwgcHJvdGFnb25pc3Qgb2YgRGFuZ2Fucm9ucGE6IFRyaWdnZXIgSGFwcHkgSGF2b2MsIGhhdmU\/IA==", "correct_answer": "VWx0aW1hdGUgTHVja3kgU3R1ZGVudA==", "incorrect_answers": ["VWx0aW1hdGUgVW5sdWNreSBTdHVkZW50", "VWx0aW1hdGUgRGV0ZWN0aXZl", "VWx0aW1hdGUgUnVubmVy"] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "category": "RW50ZXJ0YWlubWVudDogRmlsbQ==", "question": "Sm9obm55IERlcHAgbWFkZSBoaXMgYmlnLXNjcmVlbiBhY3RpbmcgZGVidXQgaW4gd2hpY2ggZmlsbT8=", "correct_answer": "QSBOaWdodG1hcmUgb24gRWxtIFN0cmVldA==", "incorrect_answers": ["TXkgQmxvb2R5IFZhbGVudGluZQ==", "SGFsbG93ZWVu", "RnJpZGF5IHRoZSAxM3Ro"] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "category": "RW50ZXJ0YWlubWVudDogSmFwYW5lc2UgQW5pbWUgJiBNYW5nYQ==", "question": "V2hpY2ggb25lIG9mIHRoZXNlIE1hbmdhIHRpdGxlcyB3YXMgbm90IGNyZWF0ZWQgYnkgVXJhc2F3YSBOYW9raT8=", "correct_answer": "TXkgRmF0aGVyJ3MgSm91cm5hbA==", "incorrect_answers": ["QmlsbHkgQmF0", "MjB0aCBDZW50dXJ5IEJveXM=", "TW9uc3Rlcg=="] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "category": "TXl0aG9sb2d5", "question": "VGhlIE1hb3JpIGhvbGQgdGhhdCB3aGljaCBpc2xhbmQgbmF0aW9uIHdhcyBmb3VuZGVkIGJ5IEt1cGUsIHdobyBkaXNjb3ZlcmVkIGl0IHVuZGVyIGEgbG9uZyB3aGl0ZSBjbG91ZD8=", "correct_answer": "TmV3IFplYWxhbmQ=", "incorrect_answers": ["VmFudWF0dQ==", "RmlqaQ==", "SGF3YWlp"] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "category": "RW50ZXJ0YWlubWVudDogTXVzaWM=", "question": "V2hpY2ggb2YgdGhlc2UgYmFuZHMgYXJlIE5PVCBmcm9tIEF1c3RyYWxpYT8=", "correct_answer": "VGhlIE5ha2VkIGFuZCBGYW1vdXM=", "incorrect_answers": ["Q3V0IENvcHk=", "RW1waXJlIG9mIHRoZSBTdW4=", "VGFtZSBJbXBhbGE="] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "ZWFzeQ==", "category": "RW50ZXJ0YWlubWVudDogRmlsbQ==", "question": "SW4gIkp1cmFzc2ljIFdvcmxkIiwgd2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgZGlub3NhdXIgdGhhdCBpcyBhIGdlbmV0aWMgaHlicmlkPw==", "correct_answer": "SW5kb21pbnVzIFJleA==", "incorrect_answers": ["TW9zYXNhdXJ1cw==", "UHRlcmFub2Rvbg==", "VHlyYW5ub3NhdXJ1cyBSZXgg"] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "category": "RW50ZXJ0YWlubWVudDogTXVzaWM=", "question": "V2hpY2ggYXJ0aXN0IGN1cmF0ZWQgdGhlIG9mZmljaWFsIHNvdW5kdHJhY2sgZm9yICJUaGUgSHVuZ2VyIEdhbWVzOiBNb2NraW5namF5IC0gUGFydCAxIj8=", "correct_answer": "TG9yZGU=", "incorrect_answers": ["S2FueWUgV2VzdA==", "VG92ZSBMbw==", "Q2hhcmxpIFhDWA=="] }, 
{ "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "category": "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=", "question": "V2hpY2ggb2YgdGhlIGZvbGxvd2luZyBQb2vDqW1vbiBnYW1lcyByZWxlYXNlZCBmaXJzdD8=", "correct_answer": "UG9rw6ltb24gQ3J5c3RhbA==", "incorrect_answers": ["UG9rw6ltb24gUGxhdGludW0=", "UG9rw6ltb24gRmlyZVJlZA==", "UG9rw6ltb24gQmxhY2s="] }] };

let pregunta0 = resultados.results[0].question;

let preguntaDecodificada0 = atob(pregunta0);

console.log(preguntaDecodificada0);

    for (let i = 0; i < 10; i++) {
        
        console.log(dato.results[i].question);

        let preguntaDecodificada = atob(dato.results[i].question);
    
        console.log(preguntaDecodificada);
        
    }*/

/*    let pregunta0 = dato.results[0];

    let pregunta1 = dato.results[1];

    let pregunta2 = dato.results[2];

    let pregunta3 = dato.results[3];

    let pregunta4 = dato.results[4];

    let pregunta5 = dato.results[5];

    let pregunta6 = dato.results[6];

    let pregunta7 = dato.results[7];

    let pregunta8 = dato.results[8];

    let pregunta9 = dato.results[9];*/