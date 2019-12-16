//Escrba un programa que verifique si dos matrices son iguales.

function compararMatriz(
    matrizUno:number[][],
    matrizDos: number [][]
): boolean {
    return true;
}

function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[]
):boolean{
    for(let i=0 ; i<arreglo.length ; i++ ){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf;
        if(!esUnArreglo){
            return false;
        }
    }
    return true;
}

function obtenerPrimeraDimesion(matrizUno:number[][]):number | false{
    //validaciones
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
    const primeraDimensionArreglo = matrizUno.length
    return primeraDimensionArreglo;
  }else{
      return false;
  }
}

function obtenerSegundaDimesion(matrizUno:number[][]):number | false{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudActualMaxima = 0; // auxiliar 
    let longitudActualMinima = -1;
    for(let i = 0; i < matrizUno.length; i++){
      const elementoActual = matrizUno[i];
      const longitudActual = elementoActual.length; //segunda dimension  
      if(longitudActualMaxima< longitudActual){
          longitudActualMaxima = longitudActual;
      }
      if(longitudActualMinima == -1){;
          longitudActualMinima = longitudActual
      }else{
          if (longitudActual < longitudActualMinima){
              longitudActualMinima = longitudActual
          }
      }
       
    }
return false;
}


function mainArreglo(){
    compararMatriz()
}
