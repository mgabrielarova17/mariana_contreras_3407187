// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Delivery Web - Logística y Transporte
// Aprendiz: Mariana Gabriela Contreras Romero
// ============================================
// NOTA: Este script gestiona la lógica de despacho
// y clasificación de tarifas para pedidos.
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento (Variables)
// ============================================
// Nomenclatura en inglés según requerimientos
const orderName = "Combo Familiar Pizza Pro";  // Nombre del producto
const orderStatus = "active";                  // Estado: active / inactive
const shippingDistance = 6.8;                  // Distancia en Km
const deliveryType = "express";                // Tipo: express, scheduled, regular
const customerInfo = {                         // Objeto para acceso seguro
    address: "Calle 15 # 10-45",
    details: {
        apartment: "Torre 2 - 401",
        gateCode: null                         // Dato opcional que puede ser null
    }
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================
// Determinamos la zona logística según la distancia (shippingDistance)
let shippingCategory;

if (shippingDistance >= 10) {
    shippingCategory = "Zona Extendida (Recargo de larga distancia)";
} else if (shippingDistance >= 4) {
    shippingCategory = "Zona Estándar (Tarifa urbana normal)";
} else {
    shippingCategory = "Zona Local (Tarifa mínima - Bici/Scooter)";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================
// Definimos si el pedido está listo para ser recogido por un repartidor
const displayStatus = orderStatus === "active" ? "DISPONIBLE PARA RECOJO 🛵" : "PEDIDO FINALIZADO ✅";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================
// Asignamos la prioridad de preparación en cocina según el tipo de servicio
let priorityLabel;

switch (deliveryType) {
    case "express":
        priorityLabel = "Prioridad ALTA (Salida en < 10 min)";
        break;
    case "scheduled":
        priorityLabel = "Prioridad MEDIA (Salida según agenda)";
        break;
    case "free":
        priorityLabel = "Prioridad ESTÁNDAR (Promoción activa)";
        break;
    default:
        priorityLabel = "Prioridad NORMAL (Orden de llegada)";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ?? (Nullish Coalescing)
// ============================================
// Manejo de valores nulos para evitar errores en la ficha
const finalOrderName = orderName ?? "Pedido sin nombre";
const accessCode = customerInfo.details.gateCode ?? "No requiere código";

// ============================================
// SECCIÓN 6: Acceso seguro con ?. (Optional Chaining)
// ============================================
// Accedemos a propiedades anidadas de forma segura
const apartmentNumber = customerInfo.details?.apartment ?? "Casa independiente";

// ============================================
// SECCIÓN 7: Ficha de salida (Template Literals)
// ============================================
console.log("=============================================");
console.log("       🚚 LOGÍSTICA - DELIVERY WEB 🚚       ");
console.log("=============================================");
console.log(`📦 Elemento:      ${finalOrderName}`);
console.log(`🚦 Estado:        ${displayStatus}`);
console.log(`📍 Distancia:     ${shippingDistance} Km`);
console.log(`💰 Clasificación: ${shippingCategory}`);
console.log(`⚡ Prioridad:     ${priorityLabel}`);
console.log("---------------------------------------------");
console.log("DETALLES DE ENTREGA:");
console.log(`🏠 Dirección:     ${customerInfo.address}`);
console.log(`🏢 Ubicación:     ${apartmentNumber}`);
console.log(`🔑 Código Acceso: ${accessCode}`);
console.log("=============================================");
console.log("     SOFTWARE DE GESTIÓN SENA - SEMANA 05");
console.log("=============================================");



