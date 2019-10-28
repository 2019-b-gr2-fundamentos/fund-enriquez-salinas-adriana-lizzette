<?php
//tipos de variables primitivas en PHP
/* PHP soporta 8 tipos de variables primitivas, estas son:
boolean = valor de verdadero o falso de una variable.
integer(entero) = valores sin decimales
float = valores con cualquier numero de decimales, no se especifica la diferencia entre float y double
string = un solo caracter o varios caracteres, no hay diferencia entre letra y palabra.
object = cualquier otra variable que no sea las anteriores
array = agrupacion de variables.
resource = variable que hace referencia a un recurso externo. Variable especial.
null = otra variable especial, representa a una sin valor.

Los nombres de una variable deben tener $ antes de estas, seguido por el nombre que no puede ser ni nulo ni
comenzar con un caracter especial. Se daran ejemplos a continuacion
*/
?>

<?php

$nombre = "Adriana";  //variable string 
$estudiante = true;    //boolean
$edad = 18;            //tipo integer
$dinero = 5.25;        //tipo float

//se pueden arreglar los datos en "arrays" en donde se pueden agrupar a los datos

$persona_array = array('nombre'=>$nombre ,'edad'=>$edad ,'estudiante'=>$estudiante ,'dinero'=>$dinero);

// usando "echo" se muestran los valores de las variables que se muestrtan al interpretar el codigo

echo "string";
echo $nombre;
echo "integer";
echo $edad;
echo "boolean";
echo $estudiante;
echo "float";
echo$dinero;

var_dump($persona_array);

?>
