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
    var tamanoQueSeResta = (vectores[0].length);
    var suma = 0;
    for (var indice = 0; indice <= tamanoV; indice++) {
        var parcial = vectores[0][indice] * vectores[1][tamanoQueSeResta];
        tamanoQueSeResta = tamanoQueSeResta - 1;
        suma = parcial + suma;
    }
    console.log("" + [0, 0, 0, suma]);
    return [0, 0, 0, suma];
}
mainV();
//return[0, 0, 1*4-2*3 ]
