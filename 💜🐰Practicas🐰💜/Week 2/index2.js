/**
 * ============================================
 * EJERCICIO 02: Tipos Primitivos Completos
 * Semana 02 — Variables y tipos de datos
 * ============================================
 */

/**
 * ============================================
 * PASO 1: string y number
 * ============================================
 */
console.log("--- Paso 1: string y number ---");

// string: texto entre comillas simples, dobles o backticks
// number: enteros y decimales son el mismo tipo
const city = "Bogotá";
const population = 8_000_000;
const temperature = 19.5;
console.log("Ciudad:", city, "| tipo:", typeof city);
console.log("Población:", population, "| tipo:", typeof population);
console.log("Temperatura:", temperature, "| tipo:", typeof temperature);

console.log("");

/**
 * ============================================
 * PASO 2: boolean
 * ============================================
 */
console.log("--- Paso 2: boolean ---");

// boolean: solo puede ser true o false
const isOpen = true;
const hasPaid = false;
console.log("¿Está abierto?", isOpen, "| tipo:", typeof isOpen);
console.log("¿Ha pagado?", hasPaid, "| tipo:", typeof hasPaid);

console.log("");

/**
 * ============================================
 * PASO 3: undefined
 * ============================================
 */
console.log("--- Paso 3: undefined ---");

// undefined: declarada pero sin valor asignado
let notAssigned;
console.log("Sin asignar:", notAssigned);
console.log("Tipo:", typeof notAssigned);

console.log("");

/**
 * ============================================
 * PASO 4: null
 * ============================================
 */
console.log("--- Paso 4: null ---");

// null: ausencia INTENCIONAL de valor
const selectedUser = null;
console.log("Usuario seleccionado:", selectedUser);
console.log("typeof null:", typeof selectedUser);
console.log("¿Es null?", selectedUser === null);

console.log("");

/**
 * ============================================
 * PASO 5: typeof para todos los tipos
 * ============================================
 */
console.log("--- Paso 5: typeof para todo ---");

// typeof devuelve el tipo como string
console.log(typeof "hola");
console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function() {});

console.log("");