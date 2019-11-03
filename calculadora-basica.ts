const numeroUnoString = prompt("Ingresa numero 1"); //STRING
const numeroDosString = prompt("Ingresa numero 2"); //STRING
const numeroUno = Number(numeroUnoString);
const numeroDos = Number(numeroDosString);
console.log("los numeros sumados resultan en:");
console.log(numeroUno+numeroDos); 
console.log("los numeros restados resultan en:");   
console.log(numeroUno-numeroDos);
console.log("los numeros multiplicados resultan en:");
console.log(numeroUno*numeroDos);
console.log("los numeros divididos resultan en:");
console.log(numeroUno/numeroDos);

// desde aqui empieza el codigo para realizar el producto punto de dos vectores con maximo 3 dimensiones

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

console.log("El resultado del producto punto de los dos vectores es:");
console.log((i1*i2)+(j1*j2)+(k1*k2));
// 3 y 4 hace que se operen los numeros  como numeros y no como strings