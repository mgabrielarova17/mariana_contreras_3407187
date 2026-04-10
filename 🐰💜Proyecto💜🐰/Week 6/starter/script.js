// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: App de delivery de comida - Logística y transporte
// Aprendiz: Mariana Gabriela Contreras Romero
// ============================================
//
// INSTRUCCIONES:
// 1. Este script gestiona una flota de pedidos en Delivery Web.
// 2. Procesa datos masivos usando for, for...of y acumuladores.
// 3. Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio (Delivery Web)
// ============================================

// Array de pedidos (mínimo 6 elementos como pide el README)
const orders = [
  { name: "Combo Pizza Pro", category: "Express", value: 25 },
  { name: "Hamburguesa Mega", category: "Standard", value: 45 },
  { name: "Sushi Familiar", category: "Express", value: 30 },
  { name: "Tacos Al Pastor", category: "Standard", value: 55 },
  { name: "Ensalada Fit", category: "Express", value: 18 },
  { name: "Pollo Asado", category: "Standard", value: 50 }
];

// Categorías relevantes para logística de transporte
const categories = ["Express", "Standard"];

// Nombre descriptivo para el valor numérico (en este caso, minutos de entrega)
const valueLabel = "minutos de entrega";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=============================================");
console.log("       🚚 DELIVERY WEB - LISTADO DE PEDIDOS");
console.log("=============================================");

let lineNumber = 0;

for (const order of orders) {
  lineNumber++;
  // Formato: N. [Nombre] — [Categoría] — [Etiqueta]: [Valor]
  console.log(`${lineNumber}. ${order.name} — ${order.category} — ${valueLabel}: ${order.value} min`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO LOGÍSTICO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  // Bucle interior para contar cuántos pedidos hay de cada tipo
  for (const order of orders) {
    if (order.category === category) {
      count++;
    }
  }

  console.log(`🔹 Categoría ${category.toUpperCase()}: ${count} pedido(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS DE TIEMPO ===");

let totalValue = 0;

for (const order of orders) {
  // Acumulamos el tiempo de cada pedido
  totalValue += order.value;
}

// Cálculo del promedio de tiempo de entrega
const averageValue = orders.length > 0 ? totalValue / orders.length : 0;

console.log(`Total acumulado de ${valueLabel}: ${totalValue} min`);
console.log(`Promedio general de despacho: ${averageValue.toFixed(2)} min`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== RÉCORDS DE VELOCIDAD ===");

// Inicializamos con el primer elemento para comparar
let maxOrder = orders[0] ?? null;
let minOrder = orders[0] ?? null;

if (orders.length > 0) {
  for (const order of orders) {
    // Encontrar el pedido que más tardó (Máximo)
    if (order.value > maxOrder.value) {
      maxOrder = order;
    }
    // Encontrar el pedido más rápido (Mínimo)
    if (order.value < minOrder.value) {
      minOrder = order;
    }
  }

  console.log(`🐢 Pedido más lento: ${maxOrder?.name} (${maxOrder?.value} min)`);
  console.log(`🚀 Pedido más rápido: ${minOrder?.name} (${minOrder?.value} min)`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO DE RENDIMIENTO ===");

// Usamos for clásico para iterar con el índice i
for (let i = 0; i < orders.length; i++) {
  const order = orders[i];

  // Determinamos si el pedido fue eficiente comparado con el promedio
  // Usamos un operador ternario para mayor limpieza
  const comparison = order.value <= averageValue 
    ? "✅ DENTRO DEL PROMEDIO (EFICIENTE)" 
    : "⚠️ SOBRE EL PROMEDIO (RETRASADO)";

  console.log(`${i + 1}. ${order.name.padEnd(20)} — ${comparison}`);
}

console.log("");
console.log("=============================================");
console.log("       FIN DEL REPORTE - DELIVERY WEB");
console.log("=============================================");