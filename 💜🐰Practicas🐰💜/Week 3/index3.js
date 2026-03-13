/**
 * ============================================
 * EJERCICIO 03: Operadores de Comparación
 * Semana 03 — Operadores y Expresiones
 * ============================================
 */

/**
 * ============================================
 * PASO 1: === y !== — Comparación estricta
 * ============================================
 */
console.log("--- Paso 1: === y !== ---");

const a = 10;
const b = 10;
const c = "10";

console.log("a === b:", a === b);
console.log("a === c:", a === c);
console.log("a !== c:", a !== c);

console.log("");

/**
 * ============================================
 * PASO 2: Por qué NO usar ==
 * ============================================
 */
console.log("--- Paso 2: el peligro de == ---");

// El operador == (débil) convierte tipos antes de comparar
console.log("0 == false  :", 0 == false);
console.log('"" == false :', "" == false);
console.log("0 == ''     :", 0 == "");
console.log('1 == "1"    :', 1 == "1");

// Con === (estricto) no hay sorpresas
console.log("0 === false  :", 0 === false);
console.log('"" === false :', "" === false);
console.log('1 === "1"    :', 1 === "1");

console.log("");

/**
 * ============================================
 * PASO 3: >, <, >=, <=
 * ============================================
 */
console.log("--- Paso 3: >, <, >=, <= ---");

const score = 85;

console.log("score > 90:", score > 90);
console.log("score >= 85:", score >= 85);
console.log("score < 60:", score < 60);
console.log("score <= 85:", score <= 85);

console.log("");

/**
 * ============================================
 * PASO 4: Validaciones prácticas
 * ============================================
 */
console.log("--- Paso 4: validaciones prácticas ---");

const age = 20;
const itemPrice = 15_000;
const budget = 20_000;

const canVote = age >= 18;
console.log("¿Puede votar?", canVote);

const canAfford = itemPrice <= budget;
console.log("¿Alcanza el presupuesto?", canAfford);

const isMinor = age < 18;
console.log("¿Es menor de edad?", isMinor);

console.log("");