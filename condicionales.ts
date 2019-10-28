//condicionales
const casado = true;
if(casado == true){
    console.log("si estoy casado");
}else{
    console.log("No estoy casado");
}


if (casado != true){ //el ! significa distinto de 
    console.log("No estoy casado");
}else{
    console.log("Si estot casado")
}

const tengoMosa = true;
const estaCasado = casado == true;  //expresion
const casadoYMosero = casado == true && tengoMosa == true;
if(casadoYMosero){
    console.log("Casado y mosero")
}else{
    console.log("O casado o mosero o nada");
}


//AND -> && amperses
// True y true = true
// true y false = false
//false y true = false
//false y false = false

//OR -> || pipes
// True y true = true
// true y false = true
//false y true = true
//false y false = false

//apago la primera alarma 
//me hago bolita y 
//lloro hasta la segunda alarma y 
//me levanto
//celularDescargado ==true
//celularDañado ==true
//amaneceMuerto ==true
//estaActivadaLaAlarma !=true
//estaEnModoSilencio ==true
//const meAtrasoAClase = celularDescargado ==true || celularDañado ==true ||  amaneceMuerto ==true || estaActivadaLaAlarma !=true || estaEnModoSilencio ==true;
 
