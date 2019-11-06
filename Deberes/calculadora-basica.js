var laOperacion = prompt("Ingresa la operacion que deseas realizar");
var op01 = "suma";
var op02 = "resta";
var op03 = "multipicación";
var op04 = "división";
var op05 = "Producto punto";
if (laOperacion == op01) {
    var numeroUnoString = prompt("Ingresa el primer numero");
    var numeroDosString = prompt("Ingresa el segundo numero");
    var numeroUno = Number(numeroUnoString);
    var numeroDos = Number(numeroDosString);
    var suma = numeroUno + numeroDos;
    console.log("El resultado de la suma es:");
    console.log(suma);
}
else {
    if (laOperacion == op02) {
        var numeroUnoString = prompt(" Ingrese valor uno ");
        var numeroDosString = prompt(" Ingrese valor dos ");
        var numeroUno = Number(numeroUnoString);
        var numeroDos = Number(numeroDosString);
        var resta = numeroUno - numeroDos;
        console.log("El resultado de la resta es:");
        console.log(resta);
    }
    else {
        if (laOperacion == op03) {
            var numeroUnoString = prompt(" Ingrese valor uno ");
            var numeroDosString = prompt(" Ingrese valor dos ");
            var numeroUno = Number(numeroUnoString);
            var numeroDos = Number(numeroDosString);
            var multiplicacion = (numeroUno * numeroDos);
            console.log("El resultado del producto es:");
            console.log(multiplicacion);
        }
        else {
            if (laOperacion == op04) {
                var numeroUnoString = prompt(" Ingrese valor uno ");
                var numeroDosString = prompt(" Ingrese valor dos ");
                var numeroUno = Number(numeroUnoString);
                var numeroDos = Number(numeroDosString);
                var division = (numeroUno / numeroDos);
                console.log("El resultado de la division es:");
                console.log(division);
            }
            else {
                if (laOperacion == op05) {
                    var stringi1 = prompt("ingrese el valor en x del vector 1");
                    var stringj1 = prompt("ingrese el valor en y del vector 1");
                    var stringk1 = prompt("ingrese el valor en z del vector 1");
                    var stringi2 = prompt("ingrese el valor en x del vector 2");
                    var stringj2 = prompt("ingrese el valor en y del vector 2");
                    var stringk2 = prompt("ingrese el valor en z del vector 2");
                    var i1 = Number(stringi1);
                    var j1 = Number(stringj1);
                    var k1 = Number(stringk1);
                    var i2 = Number(stringi2);
                    var j2 = Number(stringj2);
                    var k2 = Number(stringk2);
                    var productoPunto = ((i1 * i2) + (j1 * j2) + (k1 * k2));
                    console.log("El resultado del producto punto de los dos vectores es:");
                    console.log(productoPunto);
                }
                else {
                    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                }
            }
        }
    }
}
// 3 y 4 hace que se operen los numeros  como numeros y no como strings
