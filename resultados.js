function mostrarResultados() {
  // Traemos el array de estadísticas del localStorage
  const estadisticas = JSON.parse(localStorage.getItem("estadisticas")) || [];

  const contenedorResultados = document.getElementById("resultados");

  if (estadisticas.length === 0) {
    contenedorResultados.innerHTML =
      "<p>No se encontraron resultados. Haz el Quiz primero</p>";
  } else {
    // Obtener los detalles de la última partida
    const ultimaPartida = estadisticas[estadisticas.length - 1];

    // Mostrar los detalles de la última partida
    let detalleUltimoQuiz = "";

    detalleUltimoQuiz += `<p>Fecha de la partida: ${ultimaPartida.fecha}</p>`;
    detalleUltimoQuiz += `<p>Puntuación: ${ultimaPartida.puntuacion}</p>`;

    if (ultimaPartida.detalle && ultimaPartida.detalle.length > 0) {
      // Usamos forEach para recorrer los detalles de las respuestas
      ultimaPartida.detalle.forEach((acierto, index) => {
        detalleUltimoQuiz += `<p>Pregunta ${index + 1}: ${
          acierto === 1
            ? "<span class='correcto'>Correcta</span>"
            : "<span class='incorrecto'>Incorrecta</span>"
        }</p>`;
      });
    } else {
      detalleUltimoQuiz +=
        "<p>No hay detalles disponibles. Haz primero el Quiz</p>";
    }

    contenedorResultados.innerHTML = detalleUltimoQuiz;
  }
}

mostrarResultados();
