🏛️ Proyecto Semana 2: Ficha de Datos del Dominio
🎯 ÚNICO ENTREGABLE: Este proyecto es el único entregable obligatorio para aprobar la Semana 2.

📋 Tu Dominio Asignado
Dominio: App de delivery de comida - Logística y transporte

⚠️ POLÍTICA ANTICOPIA: Cada aprendiz tiene un dominio único. Tu código debe reflejar tu dominio específico. Una implementación copiada o no adaptada resulta en calificación de cero.

🎯 Objetivo
Crear una ficha de datos en consola utilizando variables, tipos de datos y conversiones. A diferencia de la semana pasada (donde solo usábamos valores literales), ahora usaremos const para almacenar la información de nuestra entidad.

📋 Descripción
Vas a construir una "ficha técnica" en la consola para tu dominio asignado. El script debe almacenar datos en variables, mostrarlos, verificar sus tipos con typeof y realizar al menos una conversión explícita.

✅ Requisitos
Requisitos de contenido (adaptados a tu dominio)
El script debe mostrar como mínimo:

Una constante con el nombre del dominio (string).
Una variable string para el nombre de la entidad.
Una variable number (con separadores _ si es grande).
Una variable boolean con prefijo semántico (is..., has...).
Una variable con valor null que represente algo pendiente.
Una verificación de tipos con typeof para al menos 3 variables.
Una conversión explícita (ej: pasar número a texto).
Requisitos técnicos
 El archivo se llama script.js y corre con node script.js
 Usa const para declarar las variables (no usar var).
 Usa console.log() y template literals para la salida.
 Incluye comentarios explicando las secciones.
 La salida está organizada con separadores visuales.
💡 Salida esperada de mi dominio
Nota: Esta es la salida generada para el dominio App de delivery de comida - Logística y transporte.

===========================
FICHA DE DATOS: App de Delivery
Nombre: Pizza Familiar Especial
Categoría: Comida Italiana
Total: 54500
Prioritario: true

--- Tipos de datos ---
typeof orderItem: string
typeof totalCost: number
typeof isPriority: boolean

--- Conversiones ---
Total como texto: "54500"
typeof totalString: string

--- Valor nulo ---
Repartidor Asignado: null
typeof null: object
¿Es null?: true

===========================
FIN DE FICHA
text


---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio     | Variable `string` | Variable `number` | Boolean                | Valor `null`      |
| ----------- | ----------------- | ----------------- | ---------------------- | ----------------- |
| Biblioteca  | `bookTitle`       | `totalPages`      | `isAvailable`          | `currentBorrower` |
| Farmacia    | `medicineName`    | `stockQuantity`   | `requiresPrescription` | `expirationDate`  |
| Gimnasio    | `memberName`      | `monthlyFee`      | `isActive`             | `assignedTrainer` |
| Restaurante | `dishName`        | `price`           | `isVegetarian`         | `dailySpecial`    |

---

## 📁 Estructura del Proyecto

3-proyecto/
├── README.md ← Este archivo
└── starter/
└── script.js ← Tu punto de partida

text


---

## 🛠️ Cómo Empezar

1. Abre `starter/script.js`
2. Declara las variables usando `const`
3. Usa `typeof` para verificar los tipos
4. Realiza una conversión con `String()` o `Number()`
5. Ejecuta para verificar: `node starter/script.js`

---

## 🏃 Cómo Ejecutar

```bash
cd bootcamp/week-02/3-proyecto
node starter/script.js
📊 Criterios de Evaluación
Criterio
Puntos
El script corre sin errores	20 pts
Uso correcto de const / let	20 pts
Tipos de datos correctos y typeof	20 pts
Al menos una conversión explícita	15 pts
Nomenclatura correcta (camelCase)	15 pts
Adaptación coherente al dominio asignado	10 pts
Total	100 pts

Mínimo para aprobar: 70 puntos

❓ Preguntas Frecuentes
P: ¿Puedo usar var?
R: No. En JavaScript moderno usamos const para valores que no cambian y let para los que sí.

P: ¿Por qué typeof null devuelve "object"?
R: Es un error histórico de JavaScript que se mantiene por compatibilidad. Para verificar si algo es null, usa === null.

P: ¿Qué es una conversión explícita?
R: Es cuando forzamos un cambio de tipo, ej: String(100) convierte el número 100 en el texto "100".

🔗 Navegación
⬅️ Volver a Prácticas
➡️ Semana 3: Estructuras de Control