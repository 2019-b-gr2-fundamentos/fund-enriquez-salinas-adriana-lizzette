//tipos de variables primitivas en PHP
/* PHP soporta 8 tipos de variables primitivas, estas son:
boolean
integer(entero)
float
string 
object 
array
resource 
null 

Los nombres de una variable deben tener $ antes de estas, seguido por el nombre que no puede ser ni nulo ni
comenzar con un caracter especial. Se daran ejemplos a continuacion
*/

<?php

$nombre = "Adriana";  //variable string 
$estudiante = true;    //boolean
$edad = 18;            //tipo integer
$dinero = 5.25;        //tipo float

//se pueden arreglar los datos en "arrays" en donde se pueden agrupar a los datos

$persona_array = array('nombre'=>$nombre ,'edad'=>$edad ,'estudiante'=>$estudiante ,'dinero'=>$dinero)
 
?>
