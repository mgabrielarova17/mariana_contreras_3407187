// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Dominio: App de delivery de comida - Logística y transporte
// Operadores: Aritméticos, Asignación, Comparación, Lógicos
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Constantes de configuración del servicio de delivery
const BASE_DELIVERY_FEE = 3_500; // Tarifa fija de salida
const COST_PER_KM = 1_000; // Costo adicional por kilómetro
const APP_COMMISSION = 0.10; // Comisión del 10% para la app

// Datos del pedido actual
const distanceKm = 5; // Distancia del restaurante al cliente
const orderStatus = "Entregado"; // Estado actual del pedido
const orderAmount = 42_500; // Costo total de la comida
const orderId = 8823; // Identificador del pedido

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Calculamos el costo total del envío (Tarifa base + distancia * costo km)
const distanceCost = distanceKm * COST_PER_KM;
const totalDeliveryFee = BASE_DELIVERY_FEE + distanceCost;
console.log("Costo envío base:    ", BASE_DELIVERY_FEE);
console.log("Costo por distancia: ", distanceCost);
console.log("Total a cobrar:      ", totalDeliveryFee);

// Calculamos el vuelto que hay que darle al cliente
const clientPayment = 50_000;
const totalToPay = orderAmount + totalDeliveryFee;
const change = clientPayment - totalToPay;
console.log("Monto total pedido:  ", totalToPay);
console.log("Vuelto al cliente:   ", change);

// Usamos módulo (%) para saber si el ID del pedido es par (validación simple)
const isEvenId = orderId % 2 === 0;
console.log("¿ID de pedido par?:  ", isEvenId);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Simulamos la billetera del repartidor durante su turno
let driverEarnings = 0;
console.log("Ganancia inicial:    ", driverEarnings);

// El repartidor completa su primer pedido (gana la tarifa de delivery)
driverEarnings += totalDeliveryFee;
console.log("Tras pedido 1:       ", driverEarnings);

// Completa un segundo pedido más largo (tarifa fija de 6000)
driverEarnings += 6_000;
console.log("Tras pedido 2:       ", driverEarnings);

// La app descuenta su comisión del total acumulado
driverEarnings *= (1 - APP_COMMISSION);
console.log("Tras descuento App:  ", driverEarnings.toFixed(0));

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// Verificamos si el pedido está exactamente "Entregado"
const isDelivered = orderStatus === "Entregado";
console.log("¿Estado es Entregado?", isDelivered);

// Verificamos que NO esté cancelado
const isNotCancelled = orderStatus !== "Cancelado";
console.log("¿No está cancelado?  ", isNotCancelled);

// Verificamos si el monto supera el mínimo para promociones (50.000)
const qualifiesForPromo = orderAmount >= 50_000;
console.log("¿Aplica promoción?    ", qualifiesForPromo);

// Verificamos si la distancia es corta (menos de 3km)
const isShortDistance = distanceKm < 3;
console.log("¿Distancia corta?     ", isShortDistance);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// Definimos variables adicionales para el cliente
const isVipClient = true;
const hasCoupon = false;

// Condición: Descuento especial si es VIP Y tiene cupón (ambas deben ser true)
const applySpecialDiscount = isVipClient && hasCoupon;
console.log("¿Descuento especial? ", applySpecialDiscount);

// Condición: Envío Express si es prioritario O la distancia es muy corta
const isPriorityOrder = true;
const isExpressEligible = isPriorityOrder || distanceKm <= 2;
console.log("¿Envío express?      ", isExpressEligible);

// Condición: Negación - Verificamos si el repartidor NO está disponible
const isDriverBusy = true;
const needsAnotherDriver = !isDriverBusy; // Invertimos el estado
console.log("¿Buscar otro driver? ", needsAnotherDriver);

// Condición compleja: Envío gratis si (Monto alto O es VIP) Y distancia < 10km
const freeDelivery = (orderAmount > 60_000 || isVipClient) && distanceKm < 10;
console.log("¿Envío gratis?       ", freeDelivery);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Dominio: App de Delivery - Logística");
console.log("Pedidos procesados: 2");
console.log("Ganancia neta repartidor:", driverEarnings.toFixed(0));

console.log("");