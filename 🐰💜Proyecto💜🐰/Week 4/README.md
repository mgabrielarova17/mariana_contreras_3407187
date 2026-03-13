🏛️ Proyecto Semana 04: Generador de Mensajes de Dominio
🎯 ÚNICO ENTREGABLE: Este proyecto es el único entregable obligatorio para aprobar la semana.

📋 Tu Dominio Asignado
Dominio: App de delivery de comida - Logística y transporte

⚠️ POLÍTICA ANTICOPIA: Cada aprendiz tiene un dominio único. Tu código debe reflejar tu dominio específico. Una implementación copiada o no adaptada resulta en calificación de cero.

🎯 Objetivo
Construir un generador de mensajes en consola para tu dominio asignado, usando todos los métodos de string aprendidos esta semana y template literals para construir la salida.

✅ Requisitos Funcionales
Tu script debe:

Declarar datos de tu dominio como strings
Nombre del platillo o cliente (con espacios para limpiar).
Código de pedido y categoría.
Descripción del estado del envío.
Usar al menos 5 métodos de string diferentes:
trim() para limpiar espacios.
toUpperCase() / toLowerCase() para formatos.
startsWith() o includes() para validaciones.
slice() para extraer partes del código.
replace() para actualizar información.
Construir la salida con template literals — sin concatenación con +
Generar dos tipos de mensajes:
Una ficha de entrega multilínea con los datos.
Una notificación corta de una línea.
Mostrar al menos una validación usando includes, startsWith o endsWith
💡 Salida esperada de mi dominio
Nota: Esta es la salida generada para el dominio App de Delivery.

=============================================
DELIVERY EXPRESS — FICHA DE ENTREGA
Cliente: PIZZA FAMILIAR ESPECIAL
Categoría: Comida Italiana
Código: DEL-8823
Zona: DEL
Total: 54500
Estado: Activo

Descripción:
Pedido con envío prioritario y seguimiento GPS confirmado.
--- Validaciones ---
¿Código empieza con 'DEL'?: true
¿Descripción contiene 'prioritario'?: true
¿Código termina con '23'?: true

--- Notificación ---
📢 ¡Pedido listo! Pizza Familiar Especial (DEL-8823) está en camino.

text


---

## 🛠️ Cómo ejecutar

```bash
node starter/script.js
📊 Criterios de Evaluación
Criterio
Puntos
El script funciona sin errores	20
Uso de al menos 5 métodos de string	25
Template literals (sin +)	20
Ficha multilínea + mensaje corto	15
Coherencia con el dominio asignado	10
Nomenclatura en inglés, comentarios en español	10
Total	100

⚠️ Penalizaciones: -5 pts por uso de var, -5 pts por concatenación con + donde corresponde template literal.
```