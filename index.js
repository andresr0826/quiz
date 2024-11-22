// Crear la gráfica de las partidas guardadas
function crearGrafica() {
    const estadisticas = JSON.parse(localStorage.getItem("estadisticas")) || []; // Obtener el array de estadísticas
  
    if (estadisticas.length === 0) {
      // Si no hay datos se muestra este mensaje
      document.getElementById("contenedor-grafica").innerHTML =
        "<p>No hay datos suficientes para mostrar la gráfica.</p>";
      return;
    }
  
    // datos para la gráfica
    let labels = estadisticas.map((partida) => partida.fecha); // Fechas x
    let data = estadisticas.map((partida) => partida.puntuacion); // Puntuaciones y
  
    // contenedor del canvas
    const canvas = document.createElement("canvas");
    canvas.id = "grafica-puntuaciones";
    document.getElementById("contenedor-grafica").appendChild(canvas);
  
    // Se crea la gráfica utilizando Chart.js
    new Chart(canvas, {
      type: "line", // Tipo de gráfica línea
      data: {
        labels: labels,
        datasets: [
          {
            label: "Puntuaciones por Fecha",
            data: data,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.3, 
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Fecha",
            },
          },
          y: {
            title: {
              display: true,
              text: "Puntuación",
            },
            beginAtZero: true, // Comenzar desde 0
            stepSize: 1, // Incrementos de 1
          },
        },
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: "Historial de Puntuaciones del Quiz Halloween",
          },
        },
      },
    });
  }
  

  window.onload = crearGrafica;