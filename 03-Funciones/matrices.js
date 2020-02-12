//Escrba un programa que verifique si dos matrices son iguales.
function compararMatriz(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimesion(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimesion(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimesion(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimesion(matrizDos);
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    return true;
}
function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' &&
            elementoActual.indexOf;
        if (!esUnArreglo) {
            return false;
        }
    }
    return true;
}
function obtenerPrimeraDimesion(matrizUno) {
    //validaciones
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido) {
        var primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }
    else {
        return false;
    }
}
function obtenerSegundaDimesion(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    var longitudActualMaxima = 0; // auxiliar 
    var longitudActualMinima = -1;
    if (esValido) {
        for (var i = 0; i < matrizUno.length; i++) {
            var elementoActual = matrizUno[i];
            var longitudActual = elementoActual.length; //segunda dimension  
            if (longitudActualMaxima < longitudActual) {
                longitudActualMaxima = longitudActual;
            }
            if (longitudActualMinima == -1) {
                ;
                longitudActualMinima = longitudActual;
            }
            else {
                if (longitudActual < longitudActualMinima) {
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if (longitudActualMaxima != longitudActualMinima) {
            return false;
        }
        else {
            return matrizUno[0].length;
        }
    }
    else {
        return false;
    }
}
function main() {
    var matrizUno = [[1, 2], [1]];
    var matrizDos = [[1, 2], [3, 4]];
    compararMatriz(matrizUno, matrizDos);
}
main();
