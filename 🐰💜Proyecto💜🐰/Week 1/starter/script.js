/*
 * script.js — Ficha de Presentación de Dominio
 *
 * Semana 1: ¿Qué es programar? Mi primer JavaScript
 * Bootcamp JavaScript ES2023
 *
 * ============================================
 * POLÍTICA ANTICOPIA
 * ============================================
 * Cada aprendiz trabaja sobre un DOMINIO ÚNICO asignado por el instructor.
 * Adapta TODOS los TODOs a tu dominio específico.
 * Copiar la implementación de otro compañero resulta en calificación de cero.
 *
 * INSTRUCCIONES:
 * 1. Confirma con tu instructor cuál es tu dominio asignado
 * 2. Reemplaza cada [PLACEHOLDER] con la información de TU dominio
 * 3. Completa cada TODO adaptado a tu contexto
 * 4. Ejecuta con: node starter/script.js
 *
 * NOTA SOBRE LOS EJEMPLOS:
 * Los comentarios de ayuda usan "Planetario" como dominio de ejemplo
 * porque NO es un dominio asignable. No copies esos valores —
 * crea los tuyos basados en tu dominio asignado.
 */

// ============================================
// ENCABEZADO — identifica el dominio y la entidad
// ============================================

// Mostramos el título principal con el código de la orden de delivery
console.log('=========================================');
console.log('    DELIVERY EXPRESS - ORDEN #8823    ');
console.log('=========================================');
console.log('');

// ============================================
// INFORMACIÓN GENERAL
// ============================================

// Datos básicos que identifican el pedido y el cliente
console.log('INFORMACIÓN GENERAL');
console.log('--------------------');

// Nombre del platillo solicitado (string)
console.log('Nombre:          Pizza Especial Familiar');

// Código único de rastreo del pedido (string)
console.log('Código:          DEL-8823-X');

// Categoría del restaurante o tipo de comida (string)
console.log('Categoría:       Comida Italiana - Prioritaria');

// Estado actual del proceso logístico (string)
console.log('Estado:          En camino');

console.log('');

// ============================================
// DETALLES — datos numéricos y booleanos
// ============================================

// Propiedades específicas: costos, distancias y estados de verificación
console.log('DETALLES');
console.log('--------------------');

// Dato numérico: Costo base del platillo (number)
console.log('Costo Comida:      18000');

// Expresión aritmética: Suma del costo de comida (18000) + costo de envío (2500)
console.log('Total a Pagar:     ', 18000 + 2500);

// Estado booleano: ¿El repartidor ya fue asignado a la orden? (boolean)
console.log('Repartidor Asignado: true');

// Estado booleano: ¿El cliente ya realizó el pago? (boolean)
console.log('Pago Verificado:     false');

console.log('');

// ============================================
// RESUMEN DEL DOMINIO
// ============================================

// Visión general del sistema de logística de delivery
console.log('RESUMEN DEL DOMINIO');
console.log('--------------------');

// Nombre del dominio asignado (string)
console.log('Dominio:          App de Delivery');

// Tipo de entidad principal que gestiona el sistema (string)
console.log('Entidad:          Orden de Reparto');

// Cantidad de registros simulados en el sistema (number)
console.log('Total registros:  150');

console.log('');

// ============================================
// CIERRE
// ============================================

// Mensaje final del script
console.log('=========================================');

// Mensaje de despedida relacionado con logística y transporte
console.log('  ¡Entrega rápida y segura con Node.js!');

console.log('=========================================');