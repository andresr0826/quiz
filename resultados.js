function mostrarResultados() {
    let resultados; // aquí se va a almacenar los datos de puntuación que traemos de localstorage

    const datosPuntuacion = localStorage.getItem("puntuacion"); // Obtener el valor del localStorage

    if (datosPuntuacion) {
        resultados = JSON.parse(datosPuntuacion); // si existe transforma el json
    } else {
        resultados = []; // Si no existe se le asigna un array vacío
    }

    const contenedorResultados = document.getElementById("resultados");

    if (resultados.length == 0) {
        contenedorResultados.innerHTML = "<p>No se encontraron resultados. Haz el Quiz primero</p>";
    } else {
        let puntuacionTotal = 0;
        let detalleResultados = ""; // variable para ir almacenando el texto del resultado de cada pregunta

        for (let i = 0; i < resultados.length; i++) {

            let acierto = resultados[i]; // se suma 1 si es un acierto o 0 si es un fallo
            puntuacionTotal += acierto;

            // se muestra en un <p> el resultado de cada pregunta con el operador ternario
            detalleResultados += "<p>Pregunta " + (i + 1) + ": " + (acierto == 1 ? "Correcta" : "Incorrecta") + "</p>";
        }

        // Mostrar puntuación total y detalles
        contenedorResultados.innerHTML = `
            <p>Aciertos: ${puntuacionTotal} de ${resultados.length}</p>
            ${detalleResultados}
        `;
    }
}

mostrarResultados();