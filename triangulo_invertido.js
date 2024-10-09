/*
 *******  0
 *****   1
 ***    2
 *     3
 */
const rl = require("readline-sync");

function calcularAsteriscos(altura, nivel) {
  return 2 * (altura - nivel) - 1;
}

function pintarLinea(altura, nivel) {
  let linea = " ".repeat(nivel);
  linea = linea + "*".repeat(calcularAsteriscos(altura, nivel));
  console.log(linea);
}

function pintarTriangulo(altura) {
  let i = 0;
  while (i < altura) {
    pintarLinea(altura, i);
    i++;
  }
}

const altura = parseInt(rl.question("Altura? "));
pintarTriangulo(altura);
