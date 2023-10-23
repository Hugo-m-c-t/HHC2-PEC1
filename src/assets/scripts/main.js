/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

/* Almacenamiento de las respuestas a las preguntas en un array */

let respuestas = 
["1024",
"Saturación",
"Opacidad",
"Sprite",
"4",
"Una técnica de sombreado que usa únicamente dos colores. Estos se disponen en forma de cruz (imitando un tablero de ajedrez) entre los colores originales, y variando la intensidad de cada uno se consigue una ilusión de un tercer color, como si fuese un gradiente.",
"Es una técnica despreciada de pixelart en la que una forma tiene líneas o bandas completas de píxeles de un solo color, haciendo que un dibujo parezca más plano o borroso.",
"Es una técnica despreciada de pixelart en la que se crea iluminación irregular o inconsistente, normalmente al hacer que cada parte del dibujo esté más iluminada por el centro y más oscura por sus bordes.",
"Anti-aliasing. En pixelart se crea añadiendo píxeles en los bordes de los objetos que se quieran mezclar. Estos tendrán un color resultante de una mezcla de los colores adyacentes de ambos objetos."]

/* Se recuperan los elementos (botones) que deben mostrar las respuestas*/

const preguntas = document.querySelectorAll(".contenedor-pregunta__respuesta");

/* Esta función es un EventListener que pasa por cada uno de los elementos recogidos, y desvela la respuesta si se pulsa.*/

preguntas.forEach(function(numero) {
  numero.addEventListener("click", function() {
    numero.innerText = respuestas[numero.value];
    numero.classList.add('contenedor-pregunta__respuesta--desvelada');
  });
});