# 🏛️ Proyecto Semana 09: Catálogo de Elementos Logísticos
**Aprendiz:** Mariana Gabriela Contreras Romero  
**Dominio:** App de delivery de comida - Logística y transporte (**Delivery Web**)

---

## 🎯 Objetivo del Proyecto
Implementar un **Catálogo Digital de Servicios** que gestione la oferta de la plataforma **Delivery Web**, aplicando técnicas avanzadas de manipulación de objetos en JavaScript. Se enfoca en la inspección de metadatos, validación de propiedades opcionales y transformaciones inmutables de datos.

---

## 📋 Mi Dominio Asignado
**Dominio:** App de delivery de comida - Logística y transporte.  
El catálogo representa los diferentes tipos de servicios y productos que la plataforma ofrece, gestionando propiedades críticas como tarifas, estados de actividad y detalles opcionales como seguros de envío o códigos promocionales.

---

## ✅ Requisitos Funcionales Implementados

1. **Estructura de Datos Robust**: Array de 6 objetos con propiedades como `id`, `name`, `price`, `active` y la propiedad opcional `insurance`.
2. **Inspección Técnica**:
   - Uso de `Object.keys()` para auditoría de esquemas.
   - Uso de `Object.values()` para el cálculo dinámico de estadísticas financieras.
   - Uso de `Object.entries()` para la generación de fichas técnicas detalladas.
3. **Validación de Esquema**: Implementación de `Object.hasOwn()` para detectar servicios con coberturas especiales (propiedades opcionales).
4. **Manipulación Inmutable**: Uso del **Spread Operator** para actualizaciones de precios y estados sin mutar la base de datos original.
5. **Procesamiento de Array de Objetos**:
   - `filter()`: Segmentación de servicios activos y premium.
   - `map()`: Inyección de propiedades calculadas (IVA incluido).
   - `sort()`: Ordenamiento jerárquico por costos de servicio.

---

## 📊 Criterios de Evaluación Cumplidos

| Componente Técnico                           | Implementado |
| -------------------------------------------- | :----------: |
| Array con ≥6 objetos y ≥5 propiedades        |      ✅      |
| Object.keys/values/entries                   |      ✅      |
| Object.hasOwn() para opcionales              |      ✅      |
| Iteración con for...in                       |      ✅      |
| Spread operator (Copia + Update)             |      ✅      |
| Métodos de Array (filter, find, map, sort)   |      ✅      |

---

## 🛠️ Instrucciones de Ejecución
Para visualizar el catálogo y el reporte estadístico, ejecuta:

```bash
node starter/script.js