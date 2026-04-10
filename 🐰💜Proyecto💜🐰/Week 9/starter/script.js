// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// Dominio: Delivery Web - Logística y Transporte
// Aprendiz: Mariana Gabriela Contreras Romero
// ============================================

"use strict";

// ============================================
// 1. DATOS (Array de Objetos - Mínimo 6)
// ============================================
const items = [
    { id: 101, name: "Envío Express Moto", price: 5500, active: true, zone: "Norte", insurance: true },
    { id: 102, name: "Delivery Restaurante Gourmet", price: 12500, active: true, zone: "Gourmet" }, // Sin seguro (opcional)
    { id: 103, name: "Reparto Carga Pesada", price: 45000, active: false, zone: "Urbana", weightLimit: "80kg" },
    { id: 104, name: "Mensajería Documentos VIP", price: 8900, active: true, zone: "Centro", insurance: true },
    { id: 105, name: "Transporte Cadena de Frío", price: 52000, active: true, zone: "Norte", insurance: true },
    { id: 106, name: "Envío Local Bici-Cargo", price: 3800, active: true, zone: "Barrio" }
];

console.log("=============================================");
console.log("       🏛️ SISTEMA DE CATÁLOGO - DELIVERY WEB");
console.log("=============================================\n");

// ============================================
// 2. INSPECCIÓN CON Object.*
// ============================================
console.log("--- 🔍 Auditoría de Estructura de Datos ---");
// Listar propiedades del primer elemento
const keys = Object.keys(items[0]);
console.log(`Esquema detectado: ${keys.join(" | ")}`);

// Cálculo de estadísticas usando Object.values()
const allPrices = items.map(item => item.price);
const sumPrices = Object.values(allPrices).reduce((acc, p) => acc + p, 0);
console.log(`Valor Total del Catálogo: $${sumPrices.toLocaleString()}`);
console.log(`Precio Promedio: $${(sumPrices / items.length).toFixed(2)}\n`);

// ============================================
// 3. VERIFICACIÓN CON Object.hasOwn()
// ============================================
console.log("--- 🛡️ Validación de Coberturas Especiales ---");
items.forEach(item => {
    if (Object.hasOwn(item, 'insurance')) {
        console.log(`✅ [${item.name}] Incluye Seguro de Mercancía.`);
    } else {
        console.log(`⚠️ [${item.name}] No cuenta con póliza opcional.`);
    }
});

// ============================================
// 4. ITERACIÓN CON for...in
// ============================================
console.log("\n--- 📋 Detalle Técnico (Primer Servicio) ---");
const firstItem = items[0];
for (const property in firstItem) {
    console.log(`${property.toUpperCase()}: ${firstItem[property]}`);
}

// ============================================
// 5. SPREAD OPERATOR (Actualización Inmutable)
// ============================================
// Creamos una copia del catálogo aumentando precios un 15% por temporada alta
const holidayCatalog = items.map(item => ({
    ...item,
    price: Math.round(item.price * 1.15)
}));

// ============================================
// 6. OPERACIONES CON EL ARRAY
// ============================================

// filter: Servicios activos de alta prioridad (precio > 10.000)
const highPriority = items.filter(item => item.active && item.price > 10000);

// find: Buscar un servicio por su ID
const searchId = 104;
const foundService = items.find(item => item.id === searchId);

// map: Añadir propiedad calculada de tiempo estimado de entrega
const catalogWithTime = items.map(item => ({
    ...item,
    estimatedTime: item.zone === "Norte" ? "40 min" : "25 min"
}));

// sort: Ordenar por precio ascendente (usando spread para no mutar el original)
const sortedServices = [...items].sort((a, b) => a.price - b.price);

// ============================================
// 7. REPORTE FINAL
// ============================================
console.log("\n=============================================");
console.log("       📜 REPORTE CONSOLIDADO DE SERVICIOS");
console.log("=============================================");
console.log(`Servicios de Alta Prioridad: ${highPriority.length}`);
console.log(`Resultado Búsqueda ID ${searchId}: ${foundService ? foundService.name : "No encontrado"}`);
console.log("---------------------------------------------");

console.log("LISTADO DE PRECIOS (Ordenado de menor a mayor):");
sortedServices.forEach(item => {
    const status = item.active ? "🟢" : "🔴";
    const priceFormatted = `$${item.price.toLocaleString()}`.padEnd(10);
    console.log(`${status} ${priceFormatted} | ${item.name}`);
});

console.log("=============================================");
console.log("     SOFTWARE DE GESTIÓN - SENA 2026");
console.log("=============================================");