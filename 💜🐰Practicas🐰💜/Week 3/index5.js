/**
 * ============================================
 * EJERCICIO 05: Precedencia y Coerción
 * Semana 03 — Operadores y Expresiones
 * ============================================
 */

/**
 * ============================================
 * PASO 1: Precedencia básica
 * ============================================
 */
console.log("--- Paso 1: precedencia básica ---");

// * y / se evalúan ANTES que + y -
console.log("2 + 3 * 4 =", 2 + 3 * 4);
console.log("(2 + 3) * 4 =", (2 + 3) * 4);

console.log("10 - 4 / 2 =", 10 - 4 / 2);
console.log("(10 - 4) / 2 =", (10 - 4) / 2);

console.log("");

/**
 * ============================================
 * PASO 2: Paréntesis para claridad
 * ============================================
 */
console.log("--- Paso 2: paréntesis para claridad ---");

const basePrice = 50_000;
const taxPercent = 19;

// Sin paréntesis
const totalA = basePrice + basePrice * taxPercent / 100;
console.log("Total (sin paréntesis):", totalA);

// Con paréntesis
const totalB = basePrice + (basePrice * taxPercent) / 100;
console.log("Total (con paréntesis):", totalB);

console.log("");

/**
 * ============================================
 * PASO 3: Trampas de coerción implícita
 * ============================================
 */
console.log("--- Paso 3: trampas de coerción ---");

// Cuando un operando es string, + hace concatenación
console.log('"5" + 10 =', "5" + 10);
console.log('10 + "5" =', 10 + "5");
console.log('1 + 2 + "3" =', 1 + 2 + "3");
console.log('"1" + 2 + 3 =', "1" + 2 + 3);

// Otros operadores sí convierten a número
console.log('"5" - 2 =', "5" - 2);
console.log('"6" * 2 =', "6" * 2);

console.log("");

/**
 * ============================================
 * PASO 4: Cómo evitar la coerción
 * ============================================
 */
console.log("--- Paso 4: evitar la coerción ---");

const inputA = "42";
const inputB = "8";

// ❌ Sin conversión — concatena strings
const badResult = inputA + inputB;
console.log("Sin Number():", badResult);

// ✅ Con conversión explícita — suma números
const goodResult = Number(inputA) + Number(inputB);
console.log("Con Number():", goodResult);

console.log("");