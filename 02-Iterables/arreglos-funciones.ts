const arregloNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Acceder
//Necesito: Indice
console.log(arregloNumeros[6]); //7
//Añadir al final
//Necesito: Elemento a añadirse 
arregloNumeros.push(11);
//Borrar al final 
arregloNumeros.pop();
//Añadir en un indice
//Necesito: indice, elemento
arregloNumeros.splice(1, 0, 1.1);
console.log(arregloNumeros);
//o borrar
arregloNumeros.splice(7, 1);
console.log(arregloNumeros);

/* Splice que añade un elemento
se requiere primero saber luego de que indice (siendo el primero el 0) se quiere añadir un elemento, 
luego de ello se escribe la cantidad de elementos que se quiere borrar luego del indice seleccionado,
si no se quiere borrar elementos, simplemente se escribe 0. Finalmente, se escribe el elemento que se 
quiere ingresar despues del indice seleccionado y que se establece un indice despues del seleccionado.
Este nuevo elemento puede ser escrito por nosotros o generado al azar por una función.
*/

//Buscar indice de un elemento 
console.log(arregloNumeros.indexOf(5));
console.log(arregloNumeros.indexOf(7)); //si no encuentra el elemento, sale -1

//actualizar elemento
arregloNumeros[0] = 999;