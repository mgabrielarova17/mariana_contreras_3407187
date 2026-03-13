/**
 * ============================================
 * EJERCICIO 01: Operadores Aritméticos
 * Semana 03 — Operadores y Expresiones
 * ============================================
 */

/**
 * ============================================
 * PASO 1: Operaciones básicas
 * ============================================
 */
console.log("--- Paso 1: operaciones básicas ---");

const a = 20;
const b = 6;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

console.log("");

/**
 * ============================================
 * PASO 2: Módulo %
 * ============================================
 */
console.log("--- Paso 2: módulo ---");

// El módulo devuelve el RESTO de la división entera
console.log("20 % 6 =", 20 % 6);
console.log("15 % 5 =", 15 % 5);
console.log("7 % 2  =", 7 % 2);
console.log("8 % 2  =", 8 % 2);

console.log("");

/**
 * ============================================
 * PASO 3: Potencia **
 * ============================================
 */
console.log("--- Paso 3: potencia ---");

console.log("2 ** 10      =", 2 ** 10);
console.log("3 ** 3       =", 3 ** 3);
console.log("9 ** 0.5     =", 9 ** 0.5);
console.log("10 ** -2     =", 10 ** -2);

console.log("");

/**
 * ============================================
 * PASO 4: + con strings
 * ============================================
 */
console.log("--- Paso 4: + y concatenación ---");

// Cuando hay un string, + concatena en vez de sumar
console.log(10 + 20);
console.log("10" + 20);
console.log(10 + "20");
console.log(Number("10") + 20);

console.log("");

/**
 * ============================================
 * PASO 5: Aplicación práctica
 * ============================================
 */
console.log("--- Paso 5: precio final ---");

// Cálculo de precio con impuesto y descuento
const basePrice = 100_000;
const taxRate = 0.19;
const discount = 15_000;

const priceWithTax = basePrice * (1 + taxRate);
const finalPrice = priceWithTax - discount;

console.log("Precio base:       $", basePrice);
console.log("Precio + impuesto: $", priceWithTax);
console.log("Descuento:         $", discount);
console.log("Precio final:      $", finalPrice);

console.log("");