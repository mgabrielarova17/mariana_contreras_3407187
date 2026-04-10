// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// Dominio: DELIVERY WEB (Logística y Transporte)
// Aprendiz: Mariana Gabriela Contreras Romero
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

const DOMAIN_NAME = "Delivery Web & Logistics";
const VALUE_LABEL = "pedidos de despacho";

// Límite de flota usando separadores numéricos (ES2021)
const MAX_ITEMS = 5_000;
const TAX_RATE = 0.19; // IVA para Colombia

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

// Array de objetos con tipos mixtos, numéricos, booleanos y propiedades opcionales
let deliveryOrders = [
    { id: 101, customer: "Mariana Romero", price: 45_000, active: true, zone: "Norte", insurance: true },
    { id: 102, customer: "Juan Galvis", price: 12_500, active: true, zone: "Sur" }, // Sin seguro (opcional)
    { id: 103, customer: "Restaurante El Chef", price: 85_000, active: false, zone: "Norte", notes: "Cancelado por cliente" },
    { id: 104, customer: "Farmacia Central", price: 15_800, active: true, zone: "Centro", insurance: true },
    { id: 105, customer: "Carlos Ruiz", price: 32_000, active: true, zone: "Sur", notes: "Entrega prioritaria" },
    { id: 106, customer: "Sofía Castro", price: 120_000, active: false, zone: "Oriente" }
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

const addItem = (item) => {
    if (deliveryOrders.length >= MAX_ITEMS) {
        return console.log("⚠️ ERROR: Capacidad de flota al máximo.");
    }
    deliveryOrders.push(item);
    console.log(`✅ Registro exitoso: El pedido para "${item.customer}" ha sido agregado.`);
};

const findById = (id) => {
    // Uso de .find() y optional chaining en la ejecución
    return deliveryOrders.find(order => order.id === id);
};

const getActive = () => {
    // Filtra solo los pedidos con active: true
    return deliveryOrders.filter(order => order.active);
};

const filterByField = (field, value) => {
    return deliveryOrders.filter(order => order[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

const updateItem = (id, changes) => {
    // Actualización inmutable usando map y spread operator
    deliveryOrders = deliveryOrders.map(order => 
        order.id === id ? { ...order, ...changes } : order
    );
    return deliveryOrders;
};

const calculateStats = (field) => {
    const values = deliveryOrders.map(item => item[field]);
    const total = values.reduce((acc, val) => acc + val, 0);
    
    return {
        min: Math.min(...values),
        max: Math.max(...values),
        avg: total / deliveryOrders.length,
        total: total
    };
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

const formatItem = (order) => {
    // Uso de template literals, padEnd, y Nullish Coalescing (??) para la propiedad opcional
    const idLabel = `ID: ${order.id}`.padEnd(8);
    const nameLabel = `| Cliente: ${order.customer.padEnd(20)}`;
    const priceLabel = `| $${order.price.toLocaleString().padStart(8)}`;
    const note = order.notes ?? "Sin observaciones"; // Propiedad opcional
    
    return `${idLabel} ${nameLabel} ${priceLabel} | Nota: ${note}`;
};

const buildReport = () => {
    console.log("\n" + "=".repeat(60));
    console.log(`📜 REPORTE EJECUTIVO - ${DOMAIN_NAME.toUpperCase()}`);
    console.log("=".repeat(60));

    console.log("\n📋 LISTADO ACTUAL DE PEDIDOS:");
    deliveryOrders.forEach(order => console.log(formatItem(order)));

    // Sección de activos
    const activeOrders = getActive();
    console.log(`\n🚚 Pedidos en ruta (Activos): ${activeOrders.length}`);

    // Estadísticas
    const stats = calculateStats("price");
    console.log("\n📊 RESUMEN FINANCIERO:");
    console.log(`   > Recaudación Total: $${stats.total.toLocaleString()}`);
    console.log(`   > Ticket Promedio:   $${stats.avg.toFixed(2)}`);
    console.log(`   > Pedido más caro:   $${stats.max.toLocaleString()}`);

    // Inspección de esquemas (Object.entries)
    console.log("\n🔍 METADATOS DEL PRIMER REGISTRO:");
    Object.entries(deliveryOrders[0]).forEach(([key, value]) => {
        console.log(`   - ${key.toUpperCase()}: ${value}`);
    });

    console.log("\n" + "=".repeat(60));
    console.log(`Total de ${VALUE_LABEL}: ${deliveryOrders.length} / ${MAX_ITEMS}`);
    console.log("=".repeat(60) + "\n");
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(40));
console.log(`   ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Capacidad Inicial: ${deliveryOrders.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1: Buscar por id
const found = findById(101);
console.log("Encontrado id=101:", found?.customer ?? "No encontrado");

// Paso 2: Listar activos
const active = getActive();
console.log(`Activos en sistema: ${active.length}`);

// Paso 3: Filtrar por campo (Zonas)
const filtered = filterByField("zone", "Norte");
console.log(`Filtro Zona Norte: ${filtered.length} resultados`);

// Paso 4: Actualizar con spread (Inmubilidad)
updateItem(102, { price: 15_000, notes: "Ajuste de tarifa aplicado" });
console.log(`Actualizado id=102: Nuevo precio = $${findById(102)?.price}`);

// Paso 5: Estadísticas financieras
const stats = calculateStats("price");
console.log(`Estadísticas: min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);

// Paso 6: Agregar nuevo elemento
addItem({ id: 107, customer: "Tienda Local", price: 25_000, active: true, zone: "Sur" });

// Paso 7: Reporte completo (Cierre de Etapa 0)
buildReport();