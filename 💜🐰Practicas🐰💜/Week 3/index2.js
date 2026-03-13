/**
 * ============================================
 * EJERCICIO 02: Operadores de Asignación
 * Semana 03 — Operadores y Expresiones
 * ============================================
 */

/**
 * ============================================
 * PASO 1: += y -=
 * ============================================
 */
console.log("--- Paso 1: += y -= ---");

let stock = 100;
console.log("Stock inicial:", stock);

stock += 50;    // recibe 50 unidades
console.log("Tras recibir pedido:", stock);

stock -= 30;    // vende 30 unidades
console.log("Tras venta:", stock);

console.log("");

/**
 * ============================================
 * PASO 2: *= y /=
 * ============================================
 */
console.log("--- Paso 2: *= y /= ---");

let price = 80_000;
console.log("Precio original:", price);

price *= 1.19;   // precio con IVA
console.log("Precio con IVA:", price);

let total = 240_000;
console.log("Total:", total);

total /= 3;      // dividir en 3 cuotas
console.log("Valor por cuota:", total);

console.log("");

/**
 * ============================================
 * PASO 3: %=
 * ============================================
 */
console.log("--- Paso 3: %= ---");

let number = 17;
console.log("Número original:", number);

number %= 5;
console.log("17 % 5 =", number);

console.log("");

/**
 * ============================================
 * PASO 4: Simulación de caja
 * ============================================
 */
console.log("--- Paso 4: simulación de caja ---");

let cashRegister = 500_000;
console.log("Saldo inicial:", cashRegister);

cashRegister += 120_000;
console.log("Tras cobrar:", cashRegister);

cashRegister -= 80_000;
console.log("Tras dar cambio:", cashRegister);

cashRegister *= 0.99;
console.log("Tras comisión (1%):", cashRegister);

console.log("");