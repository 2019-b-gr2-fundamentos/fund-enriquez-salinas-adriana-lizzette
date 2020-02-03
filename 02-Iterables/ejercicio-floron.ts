// 1. Crear arreglo 5 elementos 
// 2. cada elemento 1 o 0
// ej: [0, 1, 1, 0, 0]
// 3. Existe al menos un elemento 1
// 4. Hallar donde esta el 1

//agregar elementos al arreglo al azar

const floron = [];
let jugadores = 100; 
for( let elementos= 0; elementos < jugadores; elementos ++){
    const nuevoElemento = (Math.floor(Math.random()*2));
floron.push(nuevoElemento);
}

for( let indice = 0 ; indice >= 0 ; indice ++ ){
    if( floron[indice]= 0){
        indice == (indice + 1);
    }else{
        if (floron[indice]= 1){
            console.log("El jugador que tiene el floron es el:") , console.log(indice+1) 
        }
    }
}
