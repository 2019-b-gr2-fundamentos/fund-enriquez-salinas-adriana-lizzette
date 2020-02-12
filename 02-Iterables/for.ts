// for
// 1. declarar una variable
// 2. condicion (expresion)
// 3. Incrementar, disminuir

for(let numeroExDeMiCrush = 7; 
    numeroExDeMiCrush > 0 ; 
    numeroExDeMiCrush --){
    console.log("ES CAN DA LO!", numeroExDeMiCrush);
}

for(let numeroExMiCrush = 0; 
    numeroExMiCrush <= 6 ; 
    numeroExMiCrush ++){
        console.log("ES CAN DA LO!", numeroExMiCrush);
    }

for (let numeroExCrush = 0;
    numeroExCrush <7 ;
    numeroExCrush ++){
        console.log("ES CAN DA LO!", numeroExCrush);
    }

// Arreglos
// 1 Elemento (Variable const numero = 1)
// Conjunto de MISMOS ELEMENTOS (  [1, 2, 3, 4, 5]  )
// Conjunto de diferentes elementos (  [1, "abc", 3, "c", 5])

const arregloNumeros = [1, 2, 3, 4, 5];
arregloNumeros.push (6); //funcion
console.log('arregloNumeros', arregloNumeros);
arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros);
// Arreglo
// 1.Elementos
// 2. Índices (0 index based) -> POSICION
// 3. Longitud -> #elementos
console.log(arregloNumeros.length);

//FOR
// 1) let tamaño = arregloNumeros.length // 5
// 2) tamaño > 0 
// 3) --

//acceder a cada elemento del arreglo -> índice

const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno];
arregloNumeros[0];
const indiceElementoCinco = 4;
arregloNumeros [indiceElementoCinco];
arregloNumeros[4];

//Acceder al elemento 5
//1) INDICE
// [1, 2, 3, 4, 5] 
//  0  1  2  3  4  <- INDICES
console.log(arregloNumeros[indiceElementoCinco]); 


