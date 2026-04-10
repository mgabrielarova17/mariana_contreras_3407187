# 📦 Proyecto Semana 8: Gestión de Inventario con Arrays
**Aprendiz:** Mariana Gabriela Contreras Romero  
**Dominio:** App de delivery de comida - Logística y transporte (**Delivery Web**)

---

## 🎯 Objetivo del Proyecto
Implementar un sistema avanzado de **gestión de inventario y flota** para la plataforma **Delivery Web**. El objetivo es dominar la manipulación de estructuras de datos complejas mediante el uso de métodos modernos de Arrays en JavaScript (ES6+), permitiendo realizar altas, bajas, búsquedas y transformaciones de datos en tiempo real.

---

## 📋 Mi Dominio Asignado
**Dominio:** App de delivery de comida - Logística y transporte.  
En esta entrega, el script simula el panel de control de un centro de despacho donde se gestionan los pedidos (items) que entran y salen del sistema, controlando variables como costos, tiempos y disponibilidad de repartidores.

---

## ✅ Requisitos Funcionales Implementados

El proyecto demuestra el dominio de las siguientes herramientas técnicas:

1. **Estructura de Objetos**: Array de pedidos con propiedades clave: `id`, `name`, `price` (numérica), `category` y `isAvailable` (booleana).
2. **Métodos de Mutación**: 
   - `push`: Registro de nuevos pedidos entrantes.
   - `unshift`: Gestión de pedidos prioritarios (VIP).
   - `pop` / `shift`: Despacho de pedidos procesados.
   - `splice`: Cancelación o modificación de pedidos por posición.
3. **Métodos de Búsqueda y Filtrado**:
   - `find`: Localización de pedidos específicos por ID.
   - `filter`: Segregación de pedidos por categoría o estado de disponibilidad.
4. **Métodos de Iteración y Transformación**:
   - `forEach`: Generación de logs de estado en consola.
   - `map`: Creación de proyecciones de datos (ej: aplicación de descuentos o cambio de formato).
5. **Inmutabilidad con Spread Operator**: Uso de `...` para clonar el inventario y realizar fusiones de datos sin alterar la fuente original.

---

## 📊 Criterios de Evaluación (Rúbrica - 60 Puntos)

| Criterio                                   | Puntos | Estado |
| ------------------------------------------ | ------ | ------ |
| Script ejecuta sin errores (Node.js)       | 10 pts |   ✅   |
| Mínimo 5 objetos con propiedades correctas | 5 pts  |   ✅   |
| Métodos de mutación (≥ 4)                  | 10 pts |   ✅   |
| Métodos de búsqueda/filtrado (≥ 2)         | 5 pts  |   ✅   |
| Uso de `map` para transformación           | 5 pts  |   ✅   |
| Spread operator implementado               | 5 pts  |   ✅   |
| Reporte final claro y etiquetado           | 5 pts  |   ✅   |
| Coherencia con Delivery Web                | 10 pts |   ✅   |
| Nomenclatura descriptiva (Clean Code)      | 5 pts  |   ✅   |

---

## 🛠️ Cómo ejecutar el sistema

Para visualizar la gestión del inventario de pedidos en tiempo real, ejecuta:

```bash
node starter/script.js