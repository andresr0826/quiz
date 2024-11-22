# quiz
Prueba de la aplicación:

Acceder a la aplicación abriendo index.html, si no existen datos en Local Storage, se mostrarán mensajes
de que no se han encontrado datos para mostrar la gráfica de puntuaciones de partidas y el detalle del 
último Quiz en "Resultados".

Para hacer el Quiz pulsar en "Hacer Quiz" en el menú y el botón "Comenzar Quiz".

Al finalizar el Quiz pulsar en "Ver resultados" para ver la puntuación y "Volver a inicio" para ver la gráfica.

Lógica seguida:

En el fichero script.js se declaran las variables globales que se van a utilizar, y se difine la aplicación empezarQuiz que trae los datos de la API con fetch
y muestra los contenedores de la pregunta y respuestas.

Se llama a mostrarPregunta, para pintar una a una las preguntas, mezclando las respuestas para que la correcta no ocupe siempre la misma posición. Y se va
guardando en un array cada respuesta, 1 si es correcta, 0 si se ha fallado.

Cuando se llega a la décima pregunta se llama a guardarEstadisticas y se guarda en un objeto en el Local Storage: la fecha de la partida, el detalle de la partida y la
puntuación total y se actva un enlace para ir a ver los resultados.

Para mostrar resultados se en resultados.js se traen las estadísticas de Local Storage, si hay datos se pinta el listado de preguntas con su resultado y la fecha y
puntuación total de la partida. Si no hay datos se indica que se debe jugar primero.

Finalmente para generar la gráfica se traen los datos guardados de Local Storage y si no existen, se inicializa el array vacío y se indica en un mensaje que no hay datos.
Se importa en el index.html la librería Chart.js y se crea la gráfica con new Chart en index.js indicando tipo de gráfica y la configuración.


