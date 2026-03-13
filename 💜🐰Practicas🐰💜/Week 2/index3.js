/**
 * ============================================
 * EJERCICIO 03: Conversión de Tipos
 * Semana 02 — Variables y tipos de datos
 * ============================================
 */

/**
 * ============================================
 * PASO 1: Number()
 * ============================================
 */
console.log("--- Paso 1: Number() ---");

// Number() convierte un valor al tipo number
console.log(Number("42"));        
console.log(Number("3.14"));      
console.log(Number(""));          
console.log(Number("abc"));       
console.log(Number(true));        
console.log(Number(false));       
console.log(Number(null));        
console.log(Number(undefined));   

console.log("");

/**
 * ============================================
 * PASO 2: NaN — Not a Number
 * ============================================
 */
console.log("--- Paso 2: NaN ---");

// NaN es el resultado de una conversión numérica inválida
const result = Number("hola");
console.log("Resultado:", result);           
console.log("Tipo:", typeof result);         
console.log("¿Es NaN?", isNaN(result));      
console.log("NaN === NaN:", result === NaN); 

console.log("");

/**
 * ============================================
 * PASO 3: String()
 * ============================================
 */
console.log("--- Paso 3: String() ---");

// String() convierte cualquier valor a texto
console.log(String(42));          
console.log(String(3.14));        
console.log(String(true));        
console.log(String(false));       
console.log(String(null));        
console.log(String(undefined));   
console.log(String(NaN));         

console.log("");

/**
 * ============================================
 * PASO 4: Boolean()
 * ============================================
 */
console.log("--- Paso 4: Boolean() ---");

// Exactamente 6 valores son FALSY en JavaScript
// Todo lo demás es truthy
console.log("--- Valores FALSY ---");
console.log(Boolean(false));       
console.log(Boolean(0));           
console.log(Boolean(""));          
console.log(Boolean(null));        
console.log(Boolean(undefined));   
console.log(Boolean(NaN));         

console.log("--- Valores TRUTHY ---");
console.log(Boolean(1));           
console.log(Boolean(-1));          
console.log(Boolean("hola"));      
console.log(Boolean(" "));         
console.log(Boolean([]));          
console.log(Boolean({}));          

console.log("");

/**
 * ============================================
 * PASO 5: Coerción implícita vs explícita
 * ============================================
 */
console.log("--- Paso 5: implícita vs explícita ---");

// Coerción IMPLÍCITA
console.log("Implícita:");
console.log("5" + 3);   
console.log("5" - 3);   
console.log("5" * "2"); 

// Coerción EXPLÍCITA
console.log("Explícita (recomendado):");
console.log(Number("5") + 3);   
console.log(Number("5") * 2);   

console.log("");