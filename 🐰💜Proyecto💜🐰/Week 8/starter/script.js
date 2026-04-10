// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Delivery Web - Logística y Transporte
// Aprendiz: Mariana Gabriela Contreras Romero
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Logística Delivery Web"; 
const VALUE_LABEL = "pedidos";     

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

const items = [
  { id: 101, name: "Pizza Pro Familiar", price: 45000, isAvailable: true, category: "Restaurante", zone: "Norte" },
  { id: 102, name: "Combo Burger Mega", price: 32000, isAvailable: true, category: "Restaurante", zone: "Sur" },
  { id: 103, name: "Kit Farmacia Premium", price: 15000, isAvailable: false, category: "Salud", zone: "Centro" },
  { id: 104, name: "Mercado Semanal", price: 120000, isAvailable: true, category: "Supermercado", zone: "Norte" },
  { id: 105, name: "Repuestos Express", price: 55000, isAvailable: true, category: "Logística", zone: "Oriente" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 */
const addItem = (newItem) => {
  items.push(newItem);
  console.log(`✅ Pedido registrado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 */
const removeLastItem = () => {
  const removed = items.pop();
  console.log(`🗑️ Eliminado último pedido: ${removed?.name ?? "Ninguno"}`);
  return removed;
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 */
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`⭐ PRIORIDAD ALTA: Pedido ${priorityItem.name} puesto en primera fila.`);
};

/**
 * Elimina un elemento por su posición (índice)
 */
const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  if (removed.length > 0) {
    console.log(`🚫 Pedido cancelado en posición ${index}: ${removed[0].name}`);
  }
};

/**
 * Obtiene todos los elementos activos/disponibles
 */
const getActiveItems = () => {
  return items.filter(order => order.isAvailable === true);
};

/**
 * Busca un elemento por su nombre
 */
const findByName = (name) => {
  return items.find(order => order.name.toLowerCase() === name.toLowerCase());
};

/**
 * Formatea un elemento para mostrar en el reporte
 */
const formatItem = (item) => {
  const statusIcon = item.isAvailable ? "🟢" : "🔴";
  return `${statusIcon} [ID: ${item.id}] ${item.name.padEnd(20)} | $${item.price.toLocaleString()} | Zona: ${item.zone}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(60)}`);
console.log(`📦 PANEL DE CONTROL — ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(60)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de Gestión Logística ---\n");

// 1. Agregar pedido nuevo (Push)
addItem({ id: 106, name: "Desayuno Sorpresa", price: 28000, isAvailable: true, category: "Regalos", zone: "Sur" });

// 2. Agregar pedido prioritario (Unshift)
addPriorityItem({ id: 100, name: "ENVÍO VIP MÉDICO", price: 0, isAvailable: true, category: "Salud", zone: "Norte" });

// 3. Eliminar por posición (Splice) - Eliminamos el que esté en el medio (posición 3)
removeByIndex(3);

// 4. Quitar el último (Pop)
removeLastItem();

console.log("\n--- Estado Actualizado del Despacho ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y Filtrado de Datos ---\n");

// Búsqueda por nombre (Find)
const searchName = "Pizza Pro Familiar";
const found = findByName(searchName);
console.log(`🔍 Buscando "${searchName}": ${found ? "Localizado ✅" : "No encontrado ❌"}`);

// Filtrado de activos (Filter)
const activeList = getActiveItems();
console.log(`📊 Pedidos listos para envío inmediato: ${activeList.length}`);

// Snapshot inmutable (Spread Operator)
const snapshot = [...items, { id: 999, name: "Pedido Temporal", price: 1000, isAvailable: false }];
console.log(`📸 Se creó un snapshot con ${snapshot.length} elementos sin alterar el original.`);

console.log("\n--- Transformación de Datos (Map) ---\n");

// Map de solo nombres
const namesOnly = items.map(order => order.name);
console.log(`📝 Lista de nombres procesados: ${namesOnly.join(", ")}`);

// Map para transformación numérica (Ej: Precios con un 10% de recargo por festivo)
const holidayPrices = items.map(order => {
  return {
    ...order,
    price: order.price * 1.10
  };
});
console.log(`📈 Precios actualizados con recargo festivo (+10%):`);
holidayPrices.forEach(p => console.log(`  - ${p.name}: $${p.price.toLocaleString()}`));

console.log("\n--- Resumen Final de Operaciones ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Disponibles: ${activeCount} | En espera: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(60)}`);
console.log("✅ Gestión de Inventario Completada con Éxito");
console.log(`${"=".repeat(60)}\n`);