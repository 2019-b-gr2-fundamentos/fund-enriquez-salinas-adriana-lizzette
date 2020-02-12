function imprimirMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log("se termino");
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main() {
    imprimirMensajeNVeces("hola", 5);
}
function imprimir() {
    console.log('Hola');
}
imprimir();
function imprimirMensaje(mensaje) {
    console.log(mensaje);
}
imprimirMensaje('Adrian');
var vectores = [
    [1, 2, 3, 4],
    [4, 5, 6, 7]
];
vectores[0][0]; //primer arreglo, primer elemento
vectores[0][1]; //primer arreglo, segundo elemento
vectores[1][0]; //segundo arreglo, primer elemento
vectores[1][1]; //segundo arreglo, segundo elemento
//1)definir el tamaño
//2)repetir calculo n veces , n= tamaño
//3.1) acceder al primer elemento del primer arreglo
//3.2) acceder al ultimo elemento del 2do arreglo
//3.3) sumar los elementos
//3.4) 1er elemento +1 = 2do elemento 1er arreglo
//3.5) ultimo elemento -1 = penultimo del 2do arreglo
//3.6) sumar los elementos
function mainV() {
    var vectores = [
        [1, 2, 3, 4],
        [4, 5, 6, 7]
    ];
    productoCruz(vectores);
}
function productoCruz(vectores) {
    var tamanoV = (vectores[0].length);
    var suma = 0;
    for (var indice = 0; indice <= vectores[0].length; indice++) {
        var parcial = vectores[0][indice] * vectores[1][tamanoV];
        tamanoV = tamanoV - 1;
        suma = parcial + suma;
    }
    console.log("" + [0, 0, 0, suma]);
    return [0, 0, 0, suma];
}
mainV();
//return[0, 0, 1*4-2*3 ]
//Esciba un programa que verifique si dos matrices son iguales(matriz de dimension n*m)
// n y m pueden ser iguales o distintas
var vector1 = [
    [1, 2, 3],
    [1, 2, 3]
];
var vector2 = [
    [1, 2, 3],
    [1, 2, 3]
];
var vector3 = [
    [0, 1],
    [1, 0]
];
function igualdadM(vector1, vector2) {
    var m1 = vector1[0].length;
    var m2 = vector2[0].length;
    var m3 = vector3[0].length;
    var n1 = vector1[1].length;
    var n2 = vector2[1].length;
    var n3 = vector3[1].length;
    if (m1 == m2 && n1 == n2) {
        console.log("Las matrices tienen la misma dimension, por lo que pueden ser iguales");
        for (var i = 0; i <= m1; i++) {
            for (var j = 0; j < n1; j++)
                if (vector1[i][j] == vector2[i][j])
                    console.log("Las matrices son iguales termino por termino");
                else
                    console.log("Las matrices no son iguales");
        }
    }
    else {
        console.log("Las matrices no pueden ser iguales");
    }
    if (m1 == m3 && n1 == n3) {
        console.log("Las matrices tienen la misma dimension, por lo que pueden ser iguales");
        for (var i = 0; i <= m1; i++) {
            for (var j = 0; j < n1; j++)
                if (vector1[i][j] == vector3[i][j])
                    console.log("Las matrices son iguales termino por termino");
                else
                    console.log("Las matrices no son iguales");
        }
    }
    else {
        console.log("Las matrices no pueden son iguales");
    }
    if (m3 == m2 && n3 == n2) {
        console.log("Las matrices tienen la misma dimension, por lo que pueden ser iguales");
        for (var i = 0; i <= m1; i++) {
            for (var j = 0; j < n1; j++)
                if (vector2[i][j] == vector3[i][j])
                    console.log("Las matrices son iguales termino por termino");
                else
                    console.log("Las matrices no son iguales");
        }
    }
    else {
        console.log("Las matrices no pueden son iguales");
    }
}
igualdadM(vector1, vector2);
igualdadM(vector1, vector3);
igualdadM(vector2, vector3);
