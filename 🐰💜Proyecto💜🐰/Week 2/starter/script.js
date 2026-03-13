// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 TU DOMINIO: App de delivery de comida - Logística y transporte
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe ser
//    única y coherente con tu dominio asignado.
//    Implementaciones copiadas serán detectadas.
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Constante de configuración en UPPER_SNAKE_CASE
const DOMAIN_NAME = "App de Delivery";

// Variable string: Nombre del platillo o pedido
const orderItem = "Pizza Familiar Especial";

// Variable string: Categoría del restaurante
const itemCategory = "Comida Italiana";

// Variable number: Costo total del pedido (usando separador _ para legibilidad)
const totalCost = 54_500;

// Variable boolean: Indica si el pedido es prioritario (prefijo 'is')
const isPriority = true;

// Variable null: Repartidor aún no asignado a la orden
const assignedDriver = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

// Mostramos los datos principales usando template literals
console.log(`Nombre:     ${orderItem}`);
console.log(`Categoría:  ${itemCategory}`);
console.log(`Total:      ${totalCost}`);
console.log(`Prioritario: ${isPriority}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

// Verificamos el tipo de 3 variables diferentes
console.log("typeof orderItem:    ", typeof orderItem);
console.log("typeof totalCost:    ", typeof totalCost);
console.log("typeof isPriority:   ", typeof isPriority);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Conversión explícita: Convertir el número totalCost a String
const totalString = String(totalCost);

console.log(`Total como texto: "${totalString}"`);
console.log("typeof totalString: ", typeof totalString);
console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

// Mostramos el valor null y verificamos su naturaleza
console.log("Repartidor Asignado:", assignedDriver);
console.log("typeof null:        ", typeof assignedDriver); // "object" (bug histórico de JS)
console.log("¿Es null?:          ", assignedDriver === null); // true
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");