const numeroUnoString = prompt("Ingresa numero 1"); //STRING
const numeroDosString = prompt("Ingresa numero 2"); //STRING
var signoString = prompt("¿Que operacion quieres? Escribe el nombre de la operacion que deseas realizar en minusculas y sin tildes")
const numeroUno = Number(numeroUnoString);
const numeroDos = Number(numeroDosString);
if (signoString = "suma"){
    console.log(numeroUno+numeroDos);    
}else{
    if(signoString = "resta"){
        console.log(numeroUno-numeroDos);
    }else{
        if(signoString = "multiplicacion"){
            console.log(numeroUno*numeroDos);
        }else{
            if(signoString = "division"){
                console.log(numeroUno/numeroDos);
            
            }
        }
    }
}


// 3 y 4 hace que se operen los numeros  como numeros y no como strings