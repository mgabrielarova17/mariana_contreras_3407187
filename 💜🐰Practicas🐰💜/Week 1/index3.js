/**
 * ============================================
 * EJERCICIO 03: Tipos de Datos
 * ============================================
 * Ejecuta con:
 * node starter/index.js
 */

/**
 * ============================================
 * PASO 1: typeof string
 * ============================================
 */
console.log('--- Paso 1: typeof string ---');

// typeof devuelve el tipo del valor como string
console.log(typeof 'Hola');
console.log(typeof 'JavaScript');
console.log(typeof '42'); // número entre comillas

console.log('');

/**
 * ============================================
 * PASO 2: typeof number
 * ============================================
 */
console.log('--- Paso 2: typeof number ---');

// Los números no llevan comillas
console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof -100);

console.log('');

/**
 * ============================================
 * PASO 3: typeof boolean
 * ============================================
 */
console.log('--- Paso 3: typeof boolean ---');

// Solo dos valores: true y false
console.log(typeof true);
console.log(typeof false);

console.log('');

/**
 * ============================================
 * PASO 4: La trampa — número vs string numérico
 * ============================================
 */
console.log('--- Paso 4: Número vs string numérico ---');

// El mismo 42 puede ser number o string
console.log(42);           
console.log(typeof 42);    

console.log('');

console.log('42');         
console.log(typeof '42');  

console.log('');

/**
 * ============================================
 * PASO 5: typeof null — el quirk histórico
 * ============================================
 */
console.log('--- Paso 5: typeof null ---');

// null es ausencia intencional de valor
console.log(null);
console.log(typeof null);   

// undefined
let sinValor;
console.log(typeof sinValor);

console.log('');