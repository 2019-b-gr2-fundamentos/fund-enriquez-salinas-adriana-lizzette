//Do while
let vecesQueHeComido = 0; //se puede reasignar valores con el let
do{
    console.log("Vamos a comer");
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
          console.log( 'Desayuno' );
          break;
        case 2:
          console.log( 'Almuerzo' );
          break;
        case 3:
          console.log( 'Merienda' );
          break;
        default:
          alert( "Gorditos" );
      }

}while(vecesQueHeComido < 3)

/*

1 Analisis socioeconomico
2 Algebra
3 Compiladores
5 Fundamentos de programacion
7 Calculo
11 Fisica
13 Ingles

si es impar -> aumentamos a analisis
si es par -> aumentamos a algebra
si es multiplo de 3 -> aumentamos a compiladores 
*/

let deberes = 0;
let analisis = 0;
let algebra =0;
let compiladores = 0;
let fundamentos = 0;
let calculo =0;
let fisica = 0;
let ingles = 0;
do{
    deberes = deberes + 1;
     if (deberes % 13 == 0){
        ingles =(ingles + 1);
     }else{
         if (deberes % 11 == 0 ){
             fisica = (fisica +1);
         }else{
             if (deberes % 7 == 0 ){
                 calculo = (calculo + 1); 
             }else{
                 if (deberes % 5 == 0){
                     fundamentos = (fundamentos + 1 );
                 }else{
                     if(deberes % 3 == 0){
                        compiladores = (compiladores + 1 );
                     }else{
                         if( deberes % 2 == 0){
                             algebra = (algebra + 1);
                         }else{
                             if (deberes % 1 == 0){
                                 analisis = (analisis + 1);
                             }
                         }
                     }
                 }
             }
         }
     }
}while(deberes <= 1000);

console.log(`hice ${analisis} deberes de Analisis`);
console.log(algebra);
console.log(compiladores);
console.log(fundamentos);
console.log(calculo);
console.log(fisica);
console.log(ingles);
