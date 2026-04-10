# 🚀 Proyecto Integrador Etapa 0: Sistema Core Delivery Web
**Aprendiz:** Mariana Gabriela Contreras Romero  
**Dominio:** App de delivery de comida - Logística y transporte (**Delivery Web**)  
**Tiempo Estimado de Desarrollo:** 5 Horas

---

## 🏛️ Descripción del Proyecto
Este proyecto representa la culminación de la **Etapa 0 (Semanas 01-09)**. Es una aplicación de consola robusta que integra el modelo de datos, la lógica de negocio y los reportes analíticos de la plataforma **Delivery Web**. 

El sistema permite gestionar de manera integral el flujo de pedidos, desde su creación y validación, hasta la generación de estadísticas avanzadas sobre tiempos de entrega y recaudación financiera.

---

## 📋 Mi Dominio: Delivery Web
El software está diseñado para optimizar la logística de una flota de repartidores. Maneja datos en tiempo real sobre:
- Gestión de pedidos (CRUD).
- Análisis de eficiencia en tiempos de entrega.
- Filtrado por zonas geográficas (Norte, Sur, Centro, etc.).
- Control de seguros y coberturas opcionales.

---

## ✅ Requisitos Funcionales Implementados

### 1. Modelo de Datos (Data Model)
- **Array Principal**: `deliveryOrders` con 6 registros iniciales.
- **Propiedades**: `id`, `name`, `price`, `active`, `zone`, y la propiedad opcional `insurance`.
- **Configuración**: Constantes globales con separadores numéricos para facilitar la lectura (`1_500`).

### 2. Librería de Funciones (Lógica de Negocio)
Se implementaron las 8 funciones obligatorias requeridas por el proyecto:
1. `addItem(item)`: Registro validado de nuevos pedidos.
2. `findById(id)`: Localización precisa con *Optional Chaining*.
3. `getActive()`: Filtrado de pedidos listos para despacho.
4. `filterByField(field, value)`: Segmentación dinámica por cualquier campo.
5. `updateItem(id, changes)`: Actualizaciones inmutables con *Spread Operator*.
6. `calculateStats(field)`: Análisis estadístico (Máx/Mín/Promedio) usando `reduce`.
7. `formatItem(item)`: Generación de etiquetas visuales con `padEnd`.
8. `buildReport()`: Dashboard completo de la operación logística.

---

## 🛠️ Checklist de Integración Técnica

| Semana | Técnica Implementada | Estado |
| :--- | :--- | :---: |
| **01-02** | `const/let`, tipos primitivos y separadores numéricos | ✅ |
| **03** | Operadores lógicos, aritméticos y de comparación | ✅ |
| **04** | Template literals, `.padEnd()` y transformaciones de string | ✅ |
| **05** | Control de flujo (if/else) y Operador Ternario | ✅ |
| **06** | Iteración eficiente con `for...of` | ✅ |
| **07** | Arrow functions, parámetros por defecto, `??` y `?.` | ✅ |
| **08** | Métodos de Array: `filter`, `map`, `find`, `sort`, `forEach` | ✅ |
| **09** | Manipulación de Objetos: `keys`, `values`, `entries`, `hasOwn` | ✅ |

---

## 🚀 Cómo ejecutar la aplicación

Desde la terminal, navega hasta la carpeta del proyecto y ejecuta:

```bash
node starter/app.js