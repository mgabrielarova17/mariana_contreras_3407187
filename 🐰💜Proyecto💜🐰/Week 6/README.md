# 🚀 Proyecto Semanal — Semana 06: Reporte de Logística con Bucles

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el único entregable obligatorio para aprobar la semana 06 del programa de Análisis y Desarrollo de Software.

---

## 🎯 Objetivo

Implementar un **sistema de reporte automatizado** para la plataforma **Delivery Web**, procesando una colección de pedidos reales mediante el uso de bucles (`for`, `for...of`), contadores y acumuladores para optimizar la toma de decisiones en transporte y logística.

---

## 📋 Mi Dominio Asignado

**Dominio:** App de delivery de comida - Logística y transporte (**Delivery Web**).  
Este proyecto se enfoca en el análisis de tiempos de entrega, eficiencia de rutas y categorización de servicios para mejorar la experiencia del cliente final.

---

## ✅ Requisitos Funcionales Implementados

El script `script.js` cumple con los siguientes componentes técnicos:

1. **Colección de Datos**: Un array con 6 pedidos detallados (nombre, categoría de envío y tiempo de entrega en minutos).
2. **Listado con `for...of`**: Impresión organizada de toda la base de datos de pedidos actuales.
3. **Conteo por Categoría**: Uso de contadores lógicos para diferenciar pedidos de tipo **Express** frente a **Standard**.
4. **Cálculo de Estadísticas**: 
   - **Acumuladores**: Sumatoria total de los tiempos de entrega.
   - **Promedio**: Cálculo del rendimiento medio de la flota de transporte.
5. **Detección de Extremos**: Identificación algorítmica del pedido más eficiente (mínimo) y el pedido con mayor retraso (máximo).
6. **Reporte de Rendimiento**: Uso de un **bucle `for` clásico** para comparar individualmente cada pedido contra el promedio general, generando alertas de retraso.

---

## 💡 Salida Esperada en Consola

El sistema genera una ficha técnica con el siguiente formato:
* Encabezado visual de **Delivery Web**.
* Listado numerado de elementos.
* Resumen de conteo por categorías.
* Bloque estadístico con promedio y récords de velocidad.
* Análisis detallado de eficiencia por ítem.

---

## 📊 Criterios de Evaluación (Rúbrica)

| Componente                         | Puntos |
| --------------------------------- | ------ |
| Script sin errores (Node.js)      | 20     |
| `for` clásico funcional           | 20     |
| Lógica de `while` / `for...of`    | 15     |
| Contadores y acumuladores         | 15     |
| Determinación de Máx y Mín        | 10     |
| Dominio coherente + código limpio | 10     |
| Nomenclatura en inglés            | 10     |
| **Total** | **100**|

---

## 🛠️ Cómo ejecutar

Para visualizar el reporte de logística, ejecuta el siguiente comando en tu terminal:

```bash
node starter/script.js