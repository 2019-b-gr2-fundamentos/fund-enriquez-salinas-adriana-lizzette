<?php
//1
switch ($i):
    case 0:
        echo "i es igual a 0";
        break;
    case 1:
        echo "i es igual a 1";
        break;
    case 2:
        echo "i es igual a 2";
        break;
    default:
        echo "i no es igual a 0, 1 ni 2";
endswitch;
?>
<?php
//2
switch(winNobelPrizeStartingFromBirth()) {
case "paz": echo "Ganaste el premio nobel de paz!"; break;
case "fisica": echo "Ganaste el premio nobel de fisica!"; break;
case "quimica": echo "Ganaste el premio nobel de quimica!"; break;
case "medicina": echo "Ganste el premio nobel de medicina!"; break;
case "literatura": echo "ganaste el premio nobel de literatura"; break;
default: echo "Te estafaron crack, eso no es un premio."; break;
}
?>
<?php
//3
switch ($i) {
    case "manzana":
        echo "i es una manzana";
        break;
    case "barra":
        echo "i es una barra";
        break;
    case "pastel":
        echo "i es un pastel";
        break;
}
?>