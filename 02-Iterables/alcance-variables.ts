if(true){ // Bloque 1
    let edad = 30;
    console.log(edad); // 30
    if(edad){ // Bloque 2
        console.log(edad);
        if(edad){ // Bloque 3
            console.log(edad);
        }else{ // Bloque 4
            console.log(edad);
        }
    }else{ // Bloque 5
        console.log(edad);
    }
}else{ // Bloque 6
    console.log(edad); // no llega la variable por la edad
    console.log("7 años de carcel");
}