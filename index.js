function crearGrafica() {
    // Obtener las puntuaciones y fechas del localStorage
    let puntuaciones = JSON.parse(localStorage.getItem("puntuaciones")) || [];

    // Preparar los datos para la gráfica
    let labels = puntuaciones.map(p => p.fecha);  // Fechas en el eje X
    let data = puntuaciones.map(p => p.puntuacion);  // Puntuaciones en el eje Y

    // Obtener el contenedor de la gráfica
    let contenedorGrafica = document.getElementById('contenedor-grafica');

    // Crear un canvas para la gráfica
    let canvas = document.createElement('canvas');
    canvas.id = 'grafica-puntuaciones';
    contenedorGrafica.appendChild(canvas);

    // Crear la gráfica
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Puntuación total',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Últimas 10 puntuaciones'
                }
            }
        }
    });
}

window.onload = function() {
    crearGrafica();
};