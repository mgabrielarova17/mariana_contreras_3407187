// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// 🎯 OBJETIVO: Construir un generador de mensajes
//    en consola usando métodos de string y
//    template literals.
//
// 📋 TU DOMINIO: App de delivery de comida - Logística y transporte
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe ser
//    única y coherente con tu dominio.
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre del sistema de delivery
const DOMAIN_NAME = "Delivery Express";

// Nombre del platillo con espacios extra (para demostrar trim)
const rawEntityName = "  Pizza Familiar Especial  ";

// Categoría del restaurante
const entityCategory = "Comida Italiana";

// Código de seguimiento del pedido
const entityCode = "DEL-8823";

// Descripción del estado del envío
const entityDescription = "Pedido con envío prioritario y seguimiento GPS activo.";

// Costo total del pedido
const mainValue = 54_500;

// Estado del pedido (¿Está en camino?)
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// 1. Trim: Limpiamos los espacios extra del nombre
const entityName = rawEntityName.trim();

// 2. ToUpperCase: Nombre en mayúsculas para el título de la ficha
const entityNameUpper = entityName.toUpperCase();

// 3. ToLowerCase: Nombre en minúsculas para generar un usuario/email ficticio
const entityNameLower = entityName.toLowerCase();

// 4. Slice: Extraemos las primeras 3 letras del código para saber la zona
const codePrefix = entityCode.slice(0, 3);

// 5. Replace: Simulamos un cambio en la descripción (ej: actualizar estado)
// Reemplazamos "activo" por "confirmado"
const updatedDescription = entityDescription.replace("activo", "confirmado");


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// Validación 1: Verifica si el código empieza con "DEL" (Delivery)
const hasValidPrefix = entityCode.startsWith("DEL");

// Validación 2: Verifica si la descripción incluye la palabra "prioritario"
const descriptionIsRelevant = entityDescription.includes("prioritario");

// Validación 3: Verifica si el código termina con "23" (ejemplo de validación numérica)
const hasValidSuffix = entityCode.endsWith("23");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

// Ficha multilínea construida con Template Literals
const mainCard = `
 ${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTREGA
 ${separator}
Cliente:     ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Zona:        ${codePrefix}
Total:       ${mainValue}
Estado:      ${isActive ? "Activo" : "Pendiente"}

 ${subSeparator}
Descripción:
 ${updatedDescription}
 ${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
// Mostramos los resultados de las validaciones
console.log(`¿Código empieza con 'DEL'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'prioritario'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '23'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

// Mensaje corto tipo alerta usando template literal
// Usamos entityName (limpio) y no entityNameUpper para que se lea mejor
const notification = `📢 ¡Pedido listo! ${entityName} (${entityCode}) está en camino.`;
console.log(notification);
console.log("");