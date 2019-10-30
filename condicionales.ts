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
 

//TRUTY cualquier string, numero entero o decimal /0
if("abc"){
console.log("Truty");
}else{
console.log("Falsy")
}


//FALSY una cadena vacia es falsy, el 0 el falsy
if(""){
console.log("Truty");
}else{
console.log("Falsy")
}


//switch  -> manera de escribir varios if a la vez y un else al final

const calculo = "sumar" // o restar o multiplicar o dividir
switch(calculo) {
    case "sumar":
      // code block
      break; // solo para en dicho caso 
    case "restar":
      // code block
      break;
    case "multiplicar":
      // code block
      break;
    case "dividir":
      // code block
      break;
    default: //si es que no se cumple otra cosa se manda el default.
      // code block
  }

// 6 guagua
//18 guambra
//65 longo
//66 ruku

const edadString = prompt( "Ingresar Numero")
const edads = Number(edadString);
if ( edads <= 6 && edad > 0 ){
    console.log ("Guagua");
}else{
    if ( edads <= 18 && edads > 6){
        console.log("Guambra");
    }else{
        if (edads <= 65 && edads > 18){
            console.log("Longo");
        }else{
            if ( edads > 65){
                console.log( "ruku");
            }else{
                console.log("No aplica")
            }

        }
    }
}
