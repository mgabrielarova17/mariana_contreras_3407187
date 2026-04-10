# 🏛️ Proyecto Semana 05: Clasificador de Logística
**Aprendiz:** Mariana Gabriela Contreras Romero  
**Dominio:** App de delivery de comida - Logística y transporte (**Delivery Web**)

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el único entregable obligatorio para aprobar la semana 05.

---

## 🎯 Objetivo
Implementar un sistema de clasificación lógica para la gestión de pedidos y transporte en la plataforma **Delivery Web**, aplicando estructuras de control modernas: `if/else`, operador ternario, `switch`, nullish coalescing `??` y optional chaining `?.`.

---

## 📋 Mi Dominio Asignado
**App de delivery de comida - Logística y transporte.** El script automatiza la toma de decisiones logísticas, como el cálculo de tarifas según distancia, la prioridad de despacho y la validación de datos del cliente para asegurar entregas eficientes.

---

## ✅ Requisitos Funcionales Implementados
1. **Datos del pedido**: Variables con nomenclatura en inglés (`orderName`, `distance`, etc.).
2. **Clasificación con `if/else`**: Clasifica el costo de envío en 3 niveles (Local, Estándar, Especial) según la distancia.
3. **Estado con operador ternario**: Determina de forma binaria si el pedido está "Activo" o "Finalizado".
4. **Categorización con `switch`**: Asigna etiquetas de prioridad según el tipo de servicio (Express, Programado, Regular).
5. **Seguridad de datos (ES2020)**: 
   - Uso de `??` para evitar valores `null` en el nombre del cliente.
   - Uso de `?.` para acceder a objetos anidados de la dirección sin romper el código.
6. **Ficha de salida**: Resumen multilínea profesional usando **Template Literals**.

---

## 📊 Criterios de Evaluación Cumplidos
* **Lógica Condicional:** Implementación completa de niveles de decisión.
* **Código Limpio:** Nomenclatura en inglés y comentarios explicativos en español.
* **Coherencia:** Adaptación total al sistema de logística y transporte de alimentos.

---

## 🛠️ Cómo ejecutar
```bash
node starter/script.js