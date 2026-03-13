🏛️ Proyecto Semana 03: Calculadora de Dominio
🎯 ÚNICO ENTREGABLE: Este proyecto es el único entregable obligatorio para aprobar la semana.

🎯 Objetivo
Construir una calculadora multi-operación aplicada a tu dominio asignado, usando todos los operadores aprendidos esta semana: aritméticos, de asignación compuesta, de comparación estricta y lógicos.

📋 Tu Dominio Asignado
Dominio: App de delivery de comida - Logística y transporte

⚠️ POLÍTICA ANTICOPIA: Cada aprendiz tiene un dominio único. Tu código debe reflejar tu dominio específico. Una implementación copiada o no adaptada resulta en calificación de cero.

✅ Requisitos Funcionales
Tu calculadora debe incluir al menos:

Operaciones aritméticas (+, -, *, /, %)
Calcular costos de envío (tarifa base + distancia), vueltos, totales.
Operadores de asignación compuesta (+=, -=, *=)
Acumular las ganancias del repartidor durante el día y aplicar descuentos de la app.
Comparación estricta (===, !==, >, <)
Validar si el pedido está "Entregado", verificar montos mínimos.
Operadores lógicos (&&, ||, !)
Determinar si aplica envío gratis (VIP o monto alto) o si se necesita otro repartidor.
Numeric separators para precios (3_500, 42_500).
💡 Salida esperada de mi dominio
Nota: Esta es la salida generada para el dominio App de Delivery.

=== Operaciones básicas ===
Costo envío base: 3500
Costo por distancia: 5000
Total a cobrar: 8500
Monto total pedido: 51000
Vuelto al cliente: -1000
¿ID de pedido par?: true

=== Asignación compuesta ===
Ganancia inicial: 0
Tras pedido 1: 8500
Tras pedido 2: 14500
Tras descuento App: 13050

=== Validaciones con === ===
¿Estado es Entregado? true
¿No está cancelado? true
¿Aplica promoción? false
¿Distancia corta? false

=== Condiciones lógicas ===
¿Descuento especial? false
¿Envío express? true
¿Buscar otro driver? false
¿Envío gratis? true

=== Resumen ===
Dominio: App de Delivery - Logística
Pedidos procesados: 2
Ganancia neta repartidor: 13050

text


---

## 📁 Estructura del Proyecto

3-proyecto/
├── README.md ← Este archivo
└── starter/
└── script.js ← Tu punto de partida

text


---

## 🛠️ Cómo Ejecutar

```bash
cd starter
node script.js
📊 Criterios de Evaluación
Criterio
Puntos
La calculadora funciona sin errores	20
Uso correcto de operadores aritméticos	20
Uso de asignación compuesta (mínimo 2)	15
Uso de === / !== (nunca ==)	15
Uso de operadores lógicos	10
Coherencia con el dominio asignado	10
Nomenclatura en inglés, comentarios en español	10
Total	100

⚠️ Penalizaciones: -5 pts por cada uso de var, -5 pts por usar == en lugar de ===.

🔗 Navegación
⬅️ Volver a Prácticas
➡️ Semana 4: Estructuras de Control