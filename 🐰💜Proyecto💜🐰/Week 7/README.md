# 🚀 Proyecto Semana 07: Librería de Funciones Reutilizables
**Aprendiz:** Mariana Gabriela Contreras Romero  
**Dominio:** App de delivery de comida - Logística y transporte (**Delivery Web**)

---

## 🎯 Objetivo del Proyecto
Desarrollar una infraestructura de **funciones modulares y reutilizables** para la plataforma **Delivery Web**. El enfoque principal es separar la lógica de procesamiento (cálculos, validaciones y formatos) de la ejecución de efectos secundarios, garantizando un código limpio, escalable y profesional.

---

## 📋 Mi Dominio Asignado
**Dominio:** App de delivery de comida - Logística y transporte.  
En esta fase, el sistema automatiza tareas críticas como el cálculo de tarifas con IVA, la validación de disponibilidad de repartidores y el formateo de etiquetas de envío para la interfaz de usuario.

---

## ✅ Requisitos Funcionales Implementados
1. **Abstracción de Datos**: Estructura de constantes globales y colecciones de pedidos.
2. **Arrow Functions**: Implementación de funciones flecha para el formateo de strings.
3. **Funciones Puras**: Lógica de cálculo que recibe parámetros y devuelve resultados mediante `return` sin alterar variables externas.
4. **Validaciones de Negocio**: Funciones booleanas para determinar la viabilidad de entregas.
5. **Parámetros por Defecto**: Manejo de valores predeterminados para flexibilidad en las operaciones.
6. **Integración con Callbacks**: Uso de funciones como argumentos para generar reportes dinámicos.

---

## 📊 Criterios de Evaluación (100 Puntos)

| Criterio                                      | Puntos |
| --------------------------------------------- | ------ |
| Script ejecuta sin errores (Node.js)          | 20     |
| Al menos 3 funciones declaradas               | 15     |
| Uso correcto de `return`                      | 15     |
| Implementación de Arrow Functions             | 15     |
| Parámetros por defecto significativos         | 10     |
| Funciones usadas como callback/valor          | 15     |
| Nomenclatura en inglés y Clean Code           | 10     |

---

## 🛠️ Instrucciones de Ejecución
Para probar la librería de funciones, utiliza el siguiente comando:

```bash
node starter/script.js