/**
 * ============================================
 * EJERCICIO 01: const y let
 * Semana 02 — Variables y tipos de datos
 * ============================================
 */

/**
 * ============================================
 * PASO 1: Declarar con const
 * ============================================
 */
console.log("--- Paso 1: const ---");

// const es para valores que no cambian
// Es la opción por defecto: úsala siempre que puedas
const productName = "Laptop";
const productPrice = 1299.99;
console.log("Producto:", productName);
console.log("Precio:", productPrice);

console.log("");

/**
 * ============================================
 * PASO 2: Declarar con let
 * ============================================
 */
console.log("--- Paso 2: let ---");

// let es para valores que SÍ cambian
let score = 0;
console.log("Puntaje inicial:", score);
score = score + 10;
console.log("Puntaje actualizado:", score);
score = score + 5;
console.log("Puntaje final:", score);

console.log("");

/**
 * ============================================
 * PASO 3: const protege contra reasignación
 * ============================================
 */
console.log("--- Paso 3: const protege ---");

// Este ejemplo muestra que const no se puede cambiar
const appName = "MiApp";
// appName = "OtraApp"; // TypeError si se ejecuta

console.log("(Las constantes no se pueden reasignar)");
console.log("");

/**
 * ============================================
 * PASO 4: Por qué no usar var
 * ============================================
 */
console.log("--- Paso 4: var está obsoleto ---");

// var tiene un problema: permite redeclarar sin error
var oldStyle = "primero";
var oldStyle = "segundo"; // sin error — ¡peligroso!
console.log("var permite redeclarar:", oldStyle);

console.log("");

/**
 * ============================================
 * PASO 5: Alcance de bloque
 * ============================================
 */
console.log("--- Paso 5: alcance de bloque ---");

// let respeta el bloque { } donde se declara
if (true) {
  let blockScoped = "solo dentro del bloque";
  console.log("Dentro del bloque:", blockScoped);
}

console.log("Fuera del bloque: variable no existe");
// Si intentas usar blockScoped aquí daría ReferenceError

console.log("");