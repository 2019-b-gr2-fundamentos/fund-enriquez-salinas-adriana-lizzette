//let numeroUno = 1; -> notacion camelCase
//otras notaciones:
//NUMEROUNO -> TODO MAYUSCULAS
//NUMERO_UNO -> mayusculas
//NumeroUno ->
//numerouno ->
//numero_uno ->

const Uno = 1;
const Dos = 2;
let resultado = 0;
//SUMAR
resultado = 1 + 2;
//RESTAR
resultado = 1 - 2;
//MULTIPLICAR
resultado = 1 * 2;
//DIVIDIR
resultado = 1 / 2;
//EXPONENCIAL
resultado = 1 ^ 2;
//MOD
resultado = 4 % 2; // 0 -> residuo
resultado = 4 % 3; // 1 -> residuo
resultado = 7 % 3; // 1 -> residuo

console.log("pera" + 2);



//NUMEROUNO     -> TODO MAYUSCULA (SEPARACION NO)
//NUMERO_UNO    -> mayusculas guion bajo
//NumeroUno     -> primera letra de cada palabra con mayusculas
//numerouno

// STRINGS
const mensaje = "\"Hola mundo\"";
const saludo = "\"Adios mundo\"";
console.log(mensaje + " 1\t\t\t 3\n" + saludo);
//template string
const edad = 19;
const saludoEdad = `Mi edad es: \n${edad}`; // " ` " -> tilde invertida: sirve para inyectar el texto 
const saludoCompleto = `${mensaje}\n${saludo}`;
console.log(saludoEdad);
console.log(saludoCompleto);
// Contamos los elementos
const nombreLongitud = "adriana lizzette";
console.log(nombreLongitud.length);
//Eliminar espacios al inicio y al final
console.log(nombreLongitud.trim());
//Cambiar a MAYUSCULAS y a minusculas
console.log(nombreLongitud.toLocaleUpperCase()); //Mayusculas
console.log(nombreLongitud.toLocaleLowerCase()); //Minusculas
console.log(nombreLongitud.replace("e","o")); 
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud.search("z")); // search: busca el primer caracter que se está buscando
console.log(nombreLongitud.search("a")); // si existe devuelve la posición en la que se encuentra 
console.log(nombreLongitud.search("d")); // si no existe devuelve -1
console.log(nombreLongitud.slice(0,7)); // Slice: devuelve un pedazo del string entre las posiciones entregadas
console.log(nombreLongitud.indexOf("a")); // 
console.log(nombreLongitud.indexOf("z")); //
console.log(nombreLongitud.includes("r")); // booleanos
console.log(nombreLongitud.includes("z")); // devuelve booleanos true or false
console.log(nombreLongitud.endsWith("e")); // booleano
console.log(nombreLongitud.startsWith("adriana")); //booleano
console.log(nombreLongitud.substring(0,7)); // misma funcion que slice