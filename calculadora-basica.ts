const laOperacion = prompt("Ingresa la operacion que deseas realizar");
const op01 = "suma";
const op02 = "resta";
const op03 = "multipicación";
const op04 = "división";
const op05 = "Producto punto";
if (laOperacion == op01) {
    const numeroUnoString = prompt("Ingresa el primer numero");
    const numeroDosString = prompt("Ingresa el segundo numero");
    const numeroUno = Number(numeroUnoString);
    const numeroDos = Number(numeroDosString);
    const suma = numeroUno + numeroDos;
    console.log("El resultado de la suma es:");
    console.log(suma);
} else {
    if (laOperacion == op02) {
        const numeroUnoString = prompt(" Ingrese valor uno ");
        const numeroDosString = prompt(" Ingrese valor dos ");
        const numeroUno = Number(numeroUnoString);
        const numeroDos = Number(numeroDosString);
        const resta = numeroUno - numeroDos;
        console.log("El resultado de la resta es:");
        console.log(resta);
    } else {
        if (laOperacion == op03) {
            const numeroUnoString = prompt(" Ingrese valor uno ");
            const numeroDosString = prompt(" Ingrese valor dos ");
            const numeroUno = Number(numeroUnoString);
            const numeroDos = Number(numeroDosString);
            const multiplicacion = (numeroUno * numeroDos);
            console.log("El resultado del producto es:");
            console.log(multiplicacion);
        } else {
            if (laOperacion == op04) {
                const numeroUnoString = prompt(" Ingrese valor uno ");
                const numeroDosString = prompt(" Ingrese valor dos ");
                const numeroUno = Number(numeroUnoString);
                const numeroDos = Number(numeroDosString);
                const division = (numeroUno / numeroDos);
                console.log("El resultado de la division es:");
                console.log(division);
            } else {
                if (laOperacion == op05) {
                    const stringi1 = prompt("ingrese el valor en x del vector 1");
                    const stringj1 = prompt("ingrese el valor en y del vector 1");
                    const stringk1 = prompt("ingrese el valor en z del vector 1");
                    const stringi2 = prompt("ingrese el valor en x del vector 2");
                    const stringj2 = prompt("ingrese el valor en y del vector 2");
                    const stringk2 = prompt("ingrese el valor en z del vector 2");
                    const i1 = Number(stringi1);
                    const j1 = Number(stringj1);
                    const k1 = Number(stringk1);
                    const i2 = Number(stringi2);
                    const j2 = Number(stringj2);
                    const k2 = Number(stringk2);
                    const productoPunto = ((i1*i2)+(j1*j2)+(k1*k2));
                    console.log("El resultado del producto punto de los dos vectores es:");
                    console.log(productoPunto);
                } else {
                    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                }
            }
        }
    }
}

// 3 y 4 hace que se operen los numeros  como numeros y no como strings