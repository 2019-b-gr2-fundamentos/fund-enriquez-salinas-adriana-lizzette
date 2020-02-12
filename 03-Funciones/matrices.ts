//Escrba un programa que verifique si dos matrices son iguales.

function compararMatriz(
    matrizUno:number[][],
    matrizDos: number [][]
): boolean {
        const matrizUnoPrimeraDimension = obtenerPrimeraDimesion(matrizUno);
        const matrizUnoSegundaDimension = obtenerSegundaDimesion(matrizUno);
        const matrizDosPrimeraDimension = obtenerPrimeraDimesion(matrizDos);
        const matrizDosSegundaDimension = obtenerSegundaDimesion(matrizDos);
        console.log(matrizUnoPrimeraDimension);
        console.log(matrizUnoSegundaDimension);
        console.log(matrizDosPrimeraDimension);
        console.log(matrizDosSegundaDimension);
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

function obtenerPrimeraDimesion(matrizUno:number[][]):number | boolean{
    //validaciones
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
    const primeraDimensionArreglo = matrizUno.length
    return primeraDimensionArreglo;
  }else{
      return false;
  }
}

function obtenerSegundaDimesion(matrizUno:number[][]):number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudActualMaxima = 0; // auxiliar 
    let longitudActualMinima = -1;
    if(esValido){
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
          if(longitudActualMaxima != longitudActualMinima){
              return false;
          }else{
              return matrizUno[0].length;
          }
    }else{
        return false;
    }
  
}


function main(){
    const matrizUno = [ [1,2],[1]];
    const matrizDos = [ [1,2], [3,4]];
    compararMatriz(matrizUno,matrizDos)
}

main();