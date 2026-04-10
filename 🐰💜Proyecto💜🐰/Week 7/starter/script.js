// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Delivery Web - Logística y Transporte
// Aprendiz: Mariana Gabriela Contreras Romero
// ============================================

"use strict"; // activa el modo estricto para capturar errores de sintaxis

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// Constantes globales de la plataforma Delivery Web
const DOMAIN_NAME = "DELIVERY WEB — LOGÍSTICA";
const VALUE_LABEL = "Costo de Envío";
const TAX_RATE = 0.19; // IVA aplicable a servicios de transporte
const CURRENCY = "COP";

// Colección de pedidos (mínimo 5 elementos representativos)
const deliveryOrders = [
    { id: "ORD-001", customer: "Mariana Romero", category: "Restaurante", value: 35000, active: true },
    { id: "ORD-002", customer: "Juan Galvis", category: "Supermercado", value: 85000, active: true },
    { id: "ORD-003", customer: "Elena Torres", category: "Farmacia", value: 12500, active: false },
    { id: "ORD-004", customer: "Carlos Ruiz", category: "Express", value: 42000, active: true },
    { id: "ORD-005", customer: "Sofía Castro", category: "Regalos", value: 58000, active: false }
];

// ============================================
// SECCIÓN 2: Función de formato (Arrow Function)
// ============================================

/**
 * Formatea la información del pedido para etiquetas de despacho.
 * Usa template literals y muestra: ID, Cliente y Categoría.
 */
const formatOrder = (order) => {
    return `📦 [${order.id}] — Cliente: ${order.customer.padEnd(15)} | Tipo: ${order.category}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

/**
 * Calcula el precio total sumando el impuesto (IVA).
 * Función pura: no modifica datos externos.
 */
const calculateTotalWithTax = (price, tax = TAX_RATE) => {
    return price + (price * tax);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

/**
 * Valida si un pedido está apto para ser asignado a un repartidor (está activo).
 */
const isOrderReady = (order) => {
    return order.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

/**
 * Genera una línea de resumen financiero con valores por defecto para moneda y etiqueta.
 */
const formatFinancialSummary = (amount, label = VALUE_LABEL, currency = CURRENCY) => {
    return `${label}: ${currency} $${amount.toLocaleString()}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(50)}`);
console.log(`   SISTEMA DE GESTIÓN — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(50)}`);

if (deliveryOrders.length === 0) {
    console.log("\n⚠️  No hay pedidos registrados en la flota.");
} else {
    // --- Listado Detallado ---
    console.log("\n📋 HOJA DE DESPACHO:");
    let lineNumber = 1;
    for (const order of deliveryOrders) {
        // Usamos formatOrder(order) para mostrar la línea formateada
        console.log(`  ${lineNumber}. ${formatOrder(order)}`);
        lineNumber++;
    }

    // --- Validación de Disponibilidad ---
    let readyCount = 0;
    console.log("\n🔍 VALIDACIÓN DE ESTADOS:");
    for (const order of deliveryOrders) {
        const statusIcon = isOrderReady(order) ? "✅ DISPONIBLE" : "❌ RETENIDO";
        if (isOrderReady(order)) readyCount++;
        console.log(`  - ${order.id}: ${statusIcon}`);
    }
    console.log(`\n📊 Resumen de disponibilidad: ${readyCount} listos / ${deliveryOrders.length} totales`);

    // --- Cálculo Financiero ---
    let grandTotal = 0;
    for (const order of deliveryOrders) {
        // Solo sumamos al gran total si el pedido está listo/activo
        if (isOrderReady(order)) {
            const finalPrice = calculateTotalWithTax(order.value);
            grandTotal += finalPrice;
        }
    }

    // --- Resumen Final ---
    console.log("\n💰 CONSOLIDADO FINANCIERO (Pedidos Activos + IVA):");
    // Usamos formatFinancialSummary con el total calculado
    console.log(`  ${formatFinancialSummary(grandTotal, "Total Recaudado")}`);
}

console.log(`\n${"═".repeat(50)}`);
console.log("       FIN DEL REPORTE - DELIVERY WEB v1.0");
console.log(`${"═".repeat(50)}\n`);